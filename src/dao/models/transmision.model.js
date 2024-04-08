import mongoose from 'mongoose';
const { Schema } = mongoose;

const transmisionSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto' },
    tipo: { type: String, enum: ['Automática', 'Manual'], required: true },
    cantidadCambios: { type: Number, required: true },
    observaciones: { type: String }
});

const TransmisionModelo = mongoose.model('Transmision', transmisionSchema);
export default TransmisionModelo;
