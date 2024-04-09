
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ubicacionSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Auto' },
    tipo: { type: String, enum: ['Vendedor', 'Vascongadas', 'Sabattini', 'Polo', 'Malvinas', 'Cliente'], required: true },
    observaciones: { type: String }
});

const UbicacionAuto = mongoose.model('UbicacionAuto', transmisionSchema);
export default UbicacionAuto ;
