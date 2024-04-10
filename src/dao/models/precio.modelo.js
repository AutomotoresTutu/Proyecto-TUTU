import mongoose from 'mongoose';
const { Schema } = mongoose;

const preciosSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    precioContado: {
        type: Number
    },
    precioPermuta: {
        type: Number
    },
    precioFinanciado: {
        type: Number
    },
    precioContadoDolar: {
        type: Number
    },
    precioPermutaDolar: {
        type: Number
    },
    precioFinanciadoDolar: {
        type: Number
    },
    precioMesAnteriorRevista: {
        type: Number
    },
    precioMesActualRevista: {
        type: Number
    },
    precioDolaresRevista: {
        type: Number
    },
    aumentoPrecioMesAnterior: {
        type: Number
    },
    aumentoPrecioMesActual: {
        type: Number
    }
});

const Precios = mongoose.model('Precios', preciosSchema);
export default Precios;