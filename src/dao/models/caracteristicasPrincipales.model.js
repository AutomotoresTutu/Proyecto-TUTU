import mongoose from 'mongoose';
const { Schema } = mongoose;

const caracteristicasSchema = new Schema({
    nombreMarca: String,
    modelo: [{
        nombreModelo: String,
        anioFabr: [{
            anio: Number,
            version: [{
                nombreVersion: String,
            }]
        }]
    }]
}, {
    timestamps: true 
});

const Caracteristicas = mongoose.model('Caracteristicas', caracteristicasSchema); 
export default Caracteristicas; 
