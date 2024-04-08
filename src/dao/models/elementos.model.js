import mongoose from 'mongoose';
const { Schema } = mongoose;

const ElementosSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Autos',
        required: true
    },
    stereo: { type: Boolean, default: false },
    gato: { type: Boolean, default: false },
    llaveCruz: { type: Boolean, default: false },
    ruedaAuxiliar: { type: Boolean, default: false },
    manual: { type: Boolean, default: false },
    copiaLlave: { type: Boolean, default: false },
    itv: {
        realizado: { type: Boolean, default: false },
        fechaVencimiento: { type: Date, default: null }
    },
    cambioAceite: {
        km: { type: Number, default: null },
        realizado: { type: Boolean, default: false }
    },
    cambioCorrea: {
        km: { type: Number, default: null },
        realizado: { type: Boolean, default: false }
    },
    observaciones: { type: String }
});

const ElementosBasicos = mongoose.model('ElementosBasicos', ElementosSchema);
export default ElementosBasicos;
