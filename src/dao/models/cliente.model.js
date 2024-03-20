import mongoose from 'mongoose';
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;