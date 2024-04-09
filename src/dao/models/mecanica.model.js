import mongoose from 'mongoose';
const { Schema } = mongoose;

const mecanicaSchema = new Schema({
    peritaje: {
        type: Schema.Types.ObjectId,
        ref: 'Peritaje',
        required: true
    },
    fechaArreglo: {
        type: Date,
        required: true
    },
    gastosArreglo: [{
        nombre: String,
        precio: Number
    }],
    empleadoCargo: {
        type: String,
        required: true
    }
});

const Mecanica = mongoose.model('Mecanica', mecanicaSchema);
export default Mecanica;
