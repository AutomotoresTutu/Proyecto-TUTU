import mongoose from 'mongoose';
const { Schema } = mongoose;

const RegistroSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto', required: true },
    ceroOcho: { type: Boolean, default: false },
    treceLibreDeuda: {
        tieneLibreDeuda: {type: Boolean, default: false},
        solicitado: { type: Boolean, default: false },
        fechaPedido: { type: Date, default: null },
        fechaVencimiento: { type: Date, default: null }
    },
    informeDominioHistorico: {
        tieneDominioHistorico: {type: Boolean, default: false},
        solicitado: { type: Boolean, default: false },
        fechaPedido: { type: Date, default: null },
        fechaVencimiento: { type: Date, default: null }
    },
    observaciones: { type: String },
    estado: { type: String, enum: ['Pendiente', 'En proceso', 'Completado'], default: 'Pendiente' }
});

const Registro = mongoose.model('Registro', RegistroSchema);
export default Registro;
