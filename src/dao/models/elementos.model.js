import mongoose from 'mongoose';
const { Schema } = mongoose;

const elementosSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Autos',
        required: true
    },
    // las caracteristicas tienen valor false por si no existe esa info al momento de cargar esos datos
    stereo: {
        type: Boolean,
        default: false
    },
    gato: {
        type: Boolean,
        default: false
    },
    llaveCruz: {
        type: Boolean,
        default: false
    },
    ruedaAuxiliar: {
        type: Boolean,
        default: false
    },
    manual: {
        type: Boolean,
        default: false
    },
    copiaLlave: {
        type: Boolean,
        default: false
    },
    itv: {
        type: Boolean,
        default: false
    },
    cambioAceite: {
        km: {
            type: Number,
            default: null
        },
        realizado: {
            type: Boolean,
            default: false
        }
    },
    
    cambioCorrea: {
        km: {
            type: Number,
            default: null
        },
        realizado: {
            type: Boolean,
            default: false
        }
    }
});

const Elementos = mongoose.model('Elementos', elementosSchema);
export default Elementos;