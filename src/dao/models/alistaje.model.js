const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const procesoSubesquema = new Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  agenteACargo: String,
  estado: {
    type: String,
    enum: ['proceso', 'pendiente', 'completado'],
    default: 'pendiente'
  }
});

const procesoAlistajeSchema = new Schema({
  auto: {
    type: Schema.Types.ObjectId,
    ref: 'Auto',
    required: true
  },
  pulido: procesoSubesquema,
  lavadoInterior: procesoSubesquema,
  lavadoExterior: procesoSubesquema,
  brillo: procesoSubesquema,
  estado: {
    type: String,
    enum: ['proceso', 'pendiente', 'completado'],
    default: 'pendiente'
  },
  fechaProceso: {
    type: Date
  }
});

const ProcesoAlistaje = mongoose.model('ProcesoAlistaje', procesoAlistajeSchema);

module.exports = ProcesoAlistaje;
