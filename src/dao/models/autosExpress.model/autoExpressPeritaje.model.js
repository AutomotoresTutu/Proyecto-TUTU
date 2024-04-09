import mongoose from 'mongoose';
const { Schema } = mongoose;

const parteArregloSchema = new Schema({
    nombre: String,
    precioEstimado: Number
});

const autoExpressSchema = new Schema({
    patente: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anio: { type: Number, required: true },
    version: { type: String, required: true },
    km: { type: Number, required: true },
    color: { type: String, required: true },
    partesArreglar: [parteArregloSchema],
    precioTotalEstimado: Number,
    fechaPeritaje: Date
});

const AutoExpress = mongoose.model('AutoExpress', autoExpressSchema);
export default AutoExpress;
