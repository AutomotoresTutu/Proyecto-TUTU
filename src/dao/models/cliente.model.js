import mongoose from 'mongoose';
const { Schema } = mongoose;

const TelefonoSchema = new Schema({
    numero: { type: String, required: true },
    nombrePersona: { type: String }
});

const ClienteSchema = new Schema({
    nombreCompleto: { type: String, required: true },
    email: { type: String, required: true },
    telefonos: [TelefonoSchema],
    observaciones: { type: String }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
export default Cliente;
