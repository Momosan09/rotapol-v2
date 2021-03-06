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
  Order.findById(req.params.id, (err, order) => {
    res.status(200).json(order);
  });
});
router.put("/api/orders/:id", (req,res) => {
  let id = req.params.id;
  let update = {
    entregado: req.body.entregado
  };
  let options = {
    returnDocument: 'after'
  };
  Order.findByIdAndUpdate(id, update, options, (err, order) => {
    res.status(200).json(order);
  });
  // res.send(req.params.id );
})

module.exports = router;
