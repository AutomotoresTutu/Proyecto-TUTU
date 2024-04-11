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
        enum: ['Marketing', 'Recursos humanos', 'Administracion', 'Tesoreria', 'Ventas', 'Mecanica', 'Gestoria', 'Alistaje']
    },
    rol: {
        type: String,
        default: 'Empleado',
        enum: ['Empleado', 'Administrador']
    }
});

const EmpleadoModelo = mongoose.model('Empleado', empleadoSchema);

export default EmpleadoModelo;