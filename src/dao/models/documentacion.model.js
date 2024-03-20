import mongoose from 'mongoose';
const { Schema } = mongoose;

const documentacionSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    tituloAutomotor: {
        tieneTitulo: {
            type: Boolean,
            default: false
        },
        codigoTitulo: {
            type: String,
            default: null
        }
    },
    tarjetaVerde: {
        type: Boolean,
        default: false
    },
    tarjetaGNC: {
        tieneTarjetaGNC: {
            type: Boolean,
            default: false
        },
        fechaVencimientoTarjetaGNC: {
            type: Date,
            default: null
        }
    },
    obleaGNC: {
        tieneObleaGNC: {
            type: Boolean,
            default: false
        },
        fechaVencimientoObleaGNC: {
            type: Date,
            default: null
        }
    }
});

const Documentacion = mongoose.model('Documentacion', documentacionSchema);
export default Documentacion;