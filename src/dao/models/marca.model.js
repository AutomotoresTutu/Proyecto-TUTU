import mongoose from 'mongoose';
const { Schema } = mongoose;

const marcaSchema = new Schema({
    nombreMarca: String,
    modelo: {type: Schema.Types.ObjectId, ref: 'Modelo'}
}, {
    timestamps: true
});

const Marca = mongoose.model('Marca', marcaSchema);
export default Marca;
