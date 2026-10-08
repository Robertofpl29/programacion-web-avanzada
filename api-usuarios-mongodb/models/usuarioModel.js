const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  Edad: {
    type: Number,
    min: 0
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);