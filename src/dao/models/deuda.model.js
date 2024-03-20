import mongoose from 'mongoose';
const { Schema } = mongoose;

const deudaSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    deudaInfracciones: {
        pesos: {
            type: Number,
            default: 0
        },
        type: Boolean,
        default: false
    },
    deudaMunicipalidad: {
        pesos: {
            type: Number,
            default: 0
        },
        type: Boolean,
        default: false
    },
    deudaRentas: {
        pesos: {
            type: Number,
            default: 0
        },
        type: Boolean,
        default: false
    },
    montoDeuda: {
        type: Number
    }
});

const Deuda = mongoose.model('Deuda', deudaSchema);
export default Deuda;