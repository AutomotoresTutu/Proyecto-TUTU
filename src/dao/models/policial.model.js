import mongoose from 'mongoose';
const { Schema } = mongoose;

const PolicialSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto', required: true },
    verificacionPolicial: { 
        solicitado: { type: Boolean, default: false }, 
        fechaPedido: { type: Date, default: null }, 
        fechaVencimiento: { type: Date, default: null } },
    estado: { type: String, enum: ['Pendiente', 'En proceso', 'Completado'], default: 'Pendiente' },
    observaciones: { type: String }
});

const Policial = mongoose.model('Policial', PolicialSchema);
export default Policial;
