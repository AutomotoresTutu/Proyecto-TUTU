import mongoose from 'mongoose';

const RegistroSchema = new mongoose.Schema({
    auto: { type: mongoose.Schema.Types.ObjectId, ref: 'Auto', required: true },
    ceroOcho: { type: Boolean, default: false },
    treceLibreDeuda: {
        solicitado: { type: Boolean, default: false },
        fechaPedido: { type: Date, default: null },
        fechaVencimiento: { type: Date, default: null }
    },
    informeDominioHistorico: {
        solicitado: { type: Boolean, default: false },
        fechaPedido: { type: Date, default: null },
        fechaVencimiento: { type: Date, default: null }
    },
    observaciones: { type: String },
    estado: { type: String, enum: ['Pendiente', 'En proceso', 'Completado'], default: 'Pendiente' }
});

const Registro = mongoose.model('Registro', RegistroSchema);
export default Registro;
