import mongoose from 'mongoose';
const { Schema } = mongoose;

const estadoSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto' },
    nombre: { type: String, enum: ['Nuevo', 'Usado'], required: true },
    observaciones: { type: String }
});

const EstadoModelo = mongoose.model('Estado', estadoSchema);
export default EstadoModelo;
