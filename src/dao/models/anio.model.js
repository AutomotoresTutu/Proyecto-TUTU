import mongoose from 'mongoose';
const { Schema } = mongoose;

const anioFabrSchema = new Schema({
    anio: Number,
    modelo: { type: Schema.Types.ObjectId, ref: 'Modelo' },
}, {
    timestamps: true
});

const AnioFabr = mongoose.model('AnioFabr', anioFabrSchema);
export default AnioFabr;
