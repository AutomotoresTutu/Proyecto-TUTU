import mongoose from 'mongoose';
const { Schema } = mongoose;

const MecanicaSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto', required: true },
    partesPeritadas: [{
        nombre: String,
        precioEstimado: { type: Number, default: 0 },
        estado: { type: String, enum: ['Aprobado', 'Rechazado', 'Pendiente'], default: 'Pendiente' },
        fechaAprobacion: Date, 
        fechaRechazo: Date, 
        fechaArreglo: Date,
        gastosArreglo: { type: Number, default: 0 },
        gastoAdicional: {
            nombre: String,
            monto: Number
        },
        empleadoCargo: String,
        observaciones: String
    }],
    observaciones: String,
    estadoProceso: { type: String, enum: ['Pendiente','En proceso', 'Completado'], default: 'Pendiente' },
    fechaCarga: { type: Date, default: Date.now }
});

const Mecanica = mongoose.model('Mecanica', MecanicaSchema);
export default Mecanica;
