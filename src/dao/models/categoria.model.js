import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategoriaSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto', required: true },
    nombre: { type: String, enum: ['Propio', 'Consignación'], required: true },
    observaciones: { type: String }
});

const CategoriaModelo = mongoose.model('Categoria', CategoriaSchema);
export default CategoriaModelo;
