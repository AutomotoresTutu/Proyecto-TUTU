import mongoose from 'mongoose';
const { Schema } = mongoose;

const DocumentacionSchema = new Schema({
    auto: { type: Schema.Types.ObjectId, ref: 'Autos', required: true },
    tituloAutomotor: { type: Boolean, default: false },
    tarjetaVerde: { type: Boolean, default: false },
    tarjetaAutorizados: {
        tieneTarjeta: { type: Boolean, default: false },
        cantidad: { type: Number, default: 0 }
    },
    tarjetaGNC: {
        tieneTarjeta: { type: Boolean, default: false },
        vencimiento: { type: Date, default: null }
    },
    obleaGNCVigente: {
        tieneOblea: { type: Boolean, default: false },
        vencimientoCilindros: { type: Date, default: null }
    },
    observaciones: { type: String }
});

const Documentacion = mongoose.model('Documentacion', DocumentacionSchema);
export default Documentacion;
