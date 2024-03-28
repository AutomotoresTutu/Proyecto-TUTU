import mongoose from 'mongoose';
const { Schema } = mongoose;

const kmSchema = new Schema({
    valor: Number,
    modelo: { type: Schema.Types.ObjectId, ref: 'Modelo' },
}, {
    timestamps: true
});

const Km = mongoose.model('Km', kmSchema);
export default Km;
