import mongoose from 'mongoose';
const { Schema } = mongoose;

const parteArregloSchema = new Schema({
    nombre: String,
    precioEstimado: Number,
    precioReal: {
        type: Number,
        default: 0
    },
    arreglada: {
        type: Boolean,
        default: false
    }
});

const peritajeSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    partesArreglar: [parteArregloSchema],
    cotizacionArregloEstimado: {
        type: Number,
        default: 0
    },
    aprobacion: {
        type: String,
        enum: ['Aprobado', 'Rechazado', 'Pendiente'],
        default: 'Pendiente'
    },
    gastosRealizados: {
        type: Number,
        default: 0
    }
});

peritajeSchema.virtual('totalGastosEstimados').get(function() {
    return this.partesArreglar.reduce((total, parte) => total + parte.precioEstimado, 0);
});

peritajeSchema.virtual('totalGastosReales').get(function() {
    return this.partesArreglar.reduce((total, parte) => total + parte.precioReal, 0);
});

const Peritaje = mongoose.model('Peritaje', peritajeSchema);
export default Peritaje;