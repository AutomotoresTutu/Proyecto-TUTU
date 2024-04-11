import mongoose from 'mongoose';

const postventaSchema = new mongoose.Schema({
    auto: { type: mongoose.Schema.Types.ObjectId, ref: 'Auto', required: true },
    situacionPostventa: { type: String, required: true },
    diagnosticoTaller: { type: String, required: true },
    fechaRecepcion: { type: Date, required: true, default: Date.now },
    fechaRetiro: { type: Date },
    cantidadDiasTaller: { 
        type: Number, 
        default: function() {
            if (this.fechaRetiro) {
                return Math.ceil((this.fechaRetiro - this.fechaRecepcion) / (1000 * 60 * 60 * 24));
            } else {
                return Math.ceil((Date.now() - this.fechaRecepcion) / (1000 * 60 * 60 * 24));
            }
        }
    }
});

const Postventa = mongoose.model('Postventa', postventaSchema);
export default Postventa;

