const Fuel = require('../models/fuel');

const getAllFuels = async (req, res) => {
  try {
    const fuels = await Fuel.findAll();
    res.json(fuels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const createFuel = async (req, res) => {
  const { name } = req.body;

  try {
    const newFuel = await Fuel.create({ name });
    res.status(201).json(newFuel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFuel = async (req, res) => {
  const fuelId = req.params.id;

  try {
    const fuel = await Fuel.findByPk(fuelId);

    if (!fuel) {
      return res.status(404).json({ error: 'Fuel not found' });
    }

    await fuel.destroy();
    res.json({ message: 'Fuel deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editFuelName = async (req, res) => {
  const fuelId = req.params.id;
  const { name } = req.body;

  try {
    const fuel = await Fuel.findByPk(fuelId);

    if (!fuel) {
      return res.status(404).json({ error: 'Fuel not found' });
    }

    fuel.name = name;
    await fuel.save();

    res.json(fuel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {  getAllFuels,  createFuel,  deleteFuel, editFuelName };
