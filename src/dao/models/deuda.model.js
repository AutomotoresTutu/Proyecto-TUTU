import mongoose from 'mongoose';

const DeudaSchema = new mongoose.Schema({
    auto: { type: mongoose.Schema.Types.ObjectId, ref: 'Auto', required: true },
    deudaInfracciones: { 
        tieneDeudaInfracciones: { type: Boolean, default: false },
        pesos: { type: Number, default: 0 }, },
    deudaMunicipalidad: {
        tieneDeudaMuni: { type: Boolean, default: false },
        pesos: { type: Number, default: 0 }, },
    deudaRentas: { 
        tieneDeudaRentas: { type: Boolean, default: false },
        pesos: { type: Number, default: 0 }, },
    montoDeuda: { 
        type: Number, default: function() { 
            return this.deudaInfracciones.pesos + this.deudaMunicipalidad.pesos + this.deudaRentas.pesos; 
        } },
    estado: { type: String, enum: ['Pendiente', 'En proceso', 'Completado'], default: 'Pendiente' },
    observaciones: { type: String }
});

const Deuda = mongoose.model('Deuda', DeudaSchema);
export default Deuda;
