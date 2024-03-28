import mongoose from 'mongoose';
const { Schema } = mongoose;

const colorSchema = new Schema({
    nombreColor: String,
    modelo: { type: Schema.Types.ObjectId, ref: 'Modelo' },
}, {
    timestamps: true
});

const Color = mongoose.model('Color', colorSchema);
export default Color;
