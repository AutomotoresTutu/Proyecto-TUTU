import mongoose from 'mongoose';

const DeudaSchema = new mongoose.Schema({
    auto: { type: mongoose.Schema.Types.ObjectId, ref: 'Auto', required: true },
    deudaInfracciones: { 
        pesos: { type: Number, default: 0 }, 
        type: { type: Boolean, default: false } },
    deudaMunicipalidad: {
        pesos: { type: Number, default: 0 }, 
        type: { type: Boolean, default: false } },
    deudaRentas: { 
        pesos: { type: Number, default: 0 }, 
        type: { type: Boolean, default: false } },
    montoDeuda: { 
        type: Number, default: function() { 
            return this.deudaInfracciones.pesos + this.deudaMunicipalidad.pesos + this.deudaRentas.pesos; 
        } },
    estado: { type: String, enum: ['Pendiente', 'En proceso', 'Completado'], default: 'Pendiente' },
    observaciones: { type: String }
});

const Deuda = mongoose.model('Deuda', DeudaSchema);
export default Deuda;
