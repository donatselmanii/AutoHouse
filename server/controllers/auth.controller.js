const User = require('../models/user');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
require('dotenv').config();


async function signup (req, res) {
  try {
    const { firstname, lastname, username, password, email, phone, roleId } = req.body;
    const hashedPassword = await argon2.hash(password);
    const createdUser = await User.create({ firstname, lastname, username, password: hashedPassword, email, phone, roleId });
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function signin(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Username does not exist' });
    }

    if (!(await argon2.verify(user.password, password))) {
      await user.update({ failedLoginAttempts: user.failedLoginAttempts + 1 });

      if (user.failedLoginAttempts >= 5) {
        return res.status(401).json({ error: 'Exceeded maximum login attempts' });
      }

      return res.status(401).json({ error: 'Invalid password' });
    }

    await user.update({ failedLoginAttempts: 0 });

    const token = jwt.sign({ userId: user.id, roleId: user.roleId }, process.env.JWT_SECRET, { expiresIn: '1d' });

    req.session.userRole = user.roleId;
    req.session.userId = user.id;
    console.log(req.session);

    res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 86400000 });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const signout = (req, res) => {
  try {
    res.clearCookie('token', { domain: 'localhost', path: '/', secure: true, sameSite: 'None' });
    req.session.destroy((err) => {
      if (err) {
        console.error('Error during logout:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





module.exports = { signup, signin, signout };
