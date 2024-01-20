const User = require('../models/user');

async function createUser(req, res) {
    const userData = req.body;
    try {
      const {
        firstname,
        lastname,
        username,
        password,
        email,
        phone,
        roleId,
      } = userData;
  
      const user = await User.create({
        firstname,
        lastname,
        username,
        password,
        email,
        phone,
        roleId,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

  
  

module.exports = { createUser };
