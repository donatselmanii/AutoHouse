const { Extras } = require('../models/extras');

async function createExtra(req, res) {
  try {
    const newExtra = await Extras.create(req.body);
    return res.status(201).json(newExtra);
  } catch (error) {
    console.error('Error creating extra:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getAllExtras(req, res) {
  try {
    const extras = await Extras.findAll();
    return res.status(200).json(extras);
  } catch (error) {
    console.error('Error getting extras:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getExtraById(req, res) {
  const { id } = req.params;
  try {
    const extra = await Extras.findByPk(id);
    if (!extra) {
      return res.status(404).json({ message: 'Extra not found' });
    }
    return res.status(200).json(extra);
  } catch (error) {
    console.error('Error getting extra by ID:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateExtra(req, res) {
  const { id } = req.params;
  try {
    const [updated] = await Extras.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: 'Extra not found' });
    }
    const updatedExtra = await Extras.findByPk(id);
    return res.status(200).json(updatedExtra);
  } catch (error) {
    console.error('Error updating extra:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteExtra(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Extras.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Extra not found' });
    }
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting extra:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { createExtra, getAllExtras, getExtraById, updateExtra, deleteExtra };
