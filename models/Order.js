const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  phone: String,
  modelo:String,
  cantTela:Number,
  precTotal: Number,
  entregado: Boolean,
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
