import mongoose from 'mongoose';
const { Schema } = mongoose;

const titularRegistralSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto' },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    observaciones: { type: String }
});

const TitularRegistralModelo = mongoose.model('TitularRegistral', titularRegistralSchema);
export default TitularRegistralModelo;
