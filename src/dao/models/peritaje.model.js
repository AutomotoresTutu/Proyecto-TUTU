import mongoose from 'mongoose';
const { Schema } = mongoose;

const gastoAdicionalSchema = new Schema({
    nombre: String,
    precio: Number
});

const parteArregloSchema = new Schema({
    nombre: String,
    precioEstimado: {
        type: Number,
        default: 0
    },
    estado: {
        type: String,
        enum: ['Aprobado', 'Rechazado', 'Pendiente'],
        default: 'Pendiente'
    },
    precioRealDeParte: {
        type: Number,
        default: 0
    },
    gastosAdicionalesDeParte: [gastoAdicionalSchema],
    gastoTotalDeParte: {
        type: Number,
        default: 0
    },
    arreglada: {
        type: Boolean,
        default: false
    },
    observaciones: String
});


const peritajeSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    cotizacionArregloEstimado: {
        type: Number,
        default: 0
    },
    partesArreglar: [parteArregloSchema],
    gastosTotales: {
        type: Number,
        default: 0
    },
    observaciones: String,
    estadoProceso: {
        type: String,
        enum: ['Pendiente', 'En Proceso', 'Completado'],
        default: 'Pendiente'
    }
});

const Peritaje = mongoose.model('Peritaje', peritajeSchema);
export default Peritaje;
