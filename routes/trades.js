const express = require('express');
const router = express.Router();
const TradeController = require('../controllers/trades');

router.post('/', TradeController.create);

router.get('/', TradeController.list);

router.get('/:id', TradeController.findById);

['delete', 'put', 'patch'].forEach(method =>
  router[method]('/:id', TradeController.handleMethodNotAllowed)
)

module.exports = router;
