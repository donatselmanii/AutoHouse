const Type = require('../models/type');

const createType = async (req, res) => {
  try {
    const { nameType } = req.body;

    const newType = await Type.create({ nameType });

    res.status(201).json({ message: 'Type created successfully', type: newType });
  } catch (error) {
    console.error('Error creating type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteType = async (req, res) => {
  const { id } = req.params;

  try {
    const typeToDelete = await Type.findByPk(id);

    if (!typeToDelete) {
      return res.status(404).json({ error: 'Type not found' });
    }

    await typeToDelete.destroy();
    res.status(200).json({ message: 'Type deleted successfully' });
  } catch (error) {
    console.error('Error deleting type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editTypeName = async (req, res) => {
  const { id } = req.params;
  const { nameType } = req.body;

  try {
    const typeToEdit = await Type.findByPk(id);

    if (!typeToEdit) {
      return res.status(404).json({ error: 'Type not found' });
    }

    typeToEdit.nameType = nameType;
    await typeToEdit.save();

    res.status(200).json({ message: 'Type name updated successfully', type: typeToEdit });
  } catch (error) {
    console.error('Error updating type name:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editNumberOfCars = async (req, res) => {
  const { id } = req.params;
  const { numberOfCars } = req.body;

  try {
    const typeToEdit = await Type.findByPk(id);

    if (!typeToEdit) {
      return res.status(404).json({ error: 'Type not found' });
    }

    typeToEdit.numberOfCars = numberOfCars;
    await typeToEdit.save();

    res.status(200).json({ message: 'Number of cars updated successfully', type: typeToEdit });
  } catch (error) {
    console.error('Error updating number of cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json(types);
  } catch (error) {
    console.error('Error fetching types:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createType, deleteType, editTypeName, editNumberOfCars, getAllTypes };
