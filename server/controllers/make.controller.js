const Make = require('../models/make');

async function uploadImage(req, res) {
  try {
    const { name } = req.body;
    const photoBuffer = req.file.buffer;

    if (!photoBuffer) {
      return res.status(400).json({ error: 'Photo is required.' });
    }

    const newMake = await Make.create({
      name,
      photo: photoBuffer,
    });

    return res.status(201).json(newMake);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function getAllMakes(req, res) {
  try {
    const makes = await Make.findAll({ attributes: ['name', 'photo'] });
    const photos = makes.map((make) => ({
      name: make.name,
      photo: make.photo.toString('base64'),
    }));

    return res.status(200).json(photos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { uploadImage, getAllMakes };
