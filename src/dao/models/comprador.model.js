import mongoose from 'mongoose';
const { Schema } = mongoose;

const TelefonoSchema = new Schema({
    numero: { type: String, required: true },
    nombrePersona: { type: String }
});

const CompradorSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto', required: true },
    nombreCompleto: { type: String, required: true },
    dni: {type: String, required: true },
    email: { type: String, required: true },
    telefonos: [TelefonoSchema],
    observaciones: { type: String }
});

const Comprador = mongoose.model('Comprador', CompradorSchema);
export default Comprador;
