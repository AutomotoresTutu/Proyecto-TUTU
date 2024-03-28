import mongoose from 'mongoose';
const { Schema } = mongoose;

const modeloSchema = new Schema({
    nombreModelo: String,
    marca: { type: Schema.Types.ObjectId, ref: 'Marca' },
    anioFabri: {type: Schema.Types.ObjectId, ref: 'anioFabr'},
    version: { type: Schema.Types.ObjectId, ref: 'Version' },
}, {
    timestamps: true
});

const Modelo = mongoose.model('Modelo', modeloSchema);
export default Modelo;
