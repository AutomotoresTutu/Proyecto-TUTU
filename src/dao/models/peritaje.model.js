import mongoose from 'mongoose';
const { Schema } = mongoose;


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
    observaciones: String
});


const peritajeSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    partesArreglar: [parteArregloSchema],
    observaciones: String,
    estadoProceso: {
        type: String,
        enum: ['Pendiente', 'Completado'],
        default: 'Pendiente'
    }
});

const Peritaje = mongoose.model('Peritaje', peritajeSchema);
export default Peritaje;
