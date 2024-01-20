const Role = require('../models/role');

async function createRole(req, res) {
  try {
    const { name } = req.body;

    const role = await Role.create({ name });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllRoles(req, res) {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { createRole, getAllRoles };
