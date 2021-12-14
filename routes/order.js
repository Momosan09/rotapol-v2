const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


router.post('/api/orders', (req, res) => {
  // console.log(req.body.lastName);
  const order = new Order({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    modelo: req.body.modelo,
    cantTela: req.body.cantTela,
    precTotal: req.body.precTotal
  });
  order.save((err, order) => {
    res.status(201).json(order);
  });
});

router.get('/api/orders', (req, res) => {
  Order.find((err, orders) => {
    res.status(200).json(orders);
  });
});
router.get('/api/orders/:id', (req, res) => {
  res.send('hacer ' + req.params.id);
});

module.exports = router;
