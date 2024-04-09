import mongoose from 'mongoose';
const { Schema } = mongoose;

const TelefonoSchema = new Schema({
    numero: { type: String, required: true },
    nombrePersona: { type: String }
});

const VendedorSchema = new Schema({
    nombreCompleto: { type: String, required: true },
    dni: {type: String, required: true },
    email: { type: String, required: true },
    telefonos: [TelefonoSchema],
    observaciones: { type: String }
});

const Vendedor = mongoose.model('Vendedor', VendedorSchema);
export default Vendedor;
