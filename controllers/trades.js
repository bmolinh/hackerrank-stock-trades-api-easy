const Trade = require('../models/trades');

const handleErrors = (response, error) => response.status(500).json({ error: error.message });

const create = async (request, response) => {
  try {
    const trade = await Trade.create(request.body);
    response.status(201).json(trade);
  } catch (error) {
    handleErrors(response, error);
  }
};

const list = async (_request, response) => {
  try {
    const trades = await Trade.findAll({ order: [['id', 'ASC']] });
    response.status(200).json(trades);
  } catch (error) {
    handleErrors(response, error);
  }
};

const findById = async (request, response) => {
  try {
    const trade = await Trade.findByPk(request.params.id);
    if (trade) response.status(200).json(trade);
    response.status(404).send('ID not found');
  } catch (error) {
    handleErrors(response, error);
  }
};

const handleMethodNotAllowed = (_request, response) => response.status(405).end();

module.exports = {
  create,
  list,
  findById,
  handleMethodNotAllowed,
};
