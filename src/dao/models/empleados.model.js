import mongoose from 'mongoose';
const { Schema } = mongoose;

const empleadoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true,
        enum: ['marketing', 'recursos humanos', 'administracion', 'tesoreria', 'ventas', 'alistaje', 'gestoria']
    },
    rol: {
        type: String,
        default: 'empleado',
        enum: ['empleado', 'administrador']
    }
});

const EmpleadoModelo = mongoose.model('Empleado', empleadoSchema);

export default EmpleadoModelo;