const Question = require('../models/question');

const getAllQuestions = async (req, res) => {
  try {
    const page = req.query.page || 1; // Get page from query parameter or default to 1
    const perPage = req.query.perPage || 30; // Get number of questions per page from query parameter or default to 30

    const offset = (page - 1) * perPage;
    const questions = await Question.findAll({
      limit: perPage,
      offset: offset
    });

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createQuestion = async (req, res) => {
  try {
    const { question, description, photo, userId } = req.body;
    const newQuestion = await Question.create({ question, description, photo, userId });
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  createQuestion,
};
