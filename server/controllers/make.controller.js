const Make = require('../models/make');

async function uploadImage(req, res) {
  try {
    const { name, photo } = req.body;
    if (!photo) {
      return res.status(400).json({ error: 'Photo is required.' });
    }

    const newMake = await Make.create({
      name,
      photo,
    });

    return res.status(201).json(newMake);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { uploadImage };
