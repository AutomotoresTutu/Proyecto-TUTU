import mongoose from 'mongoose';
const { Schema } = mongoose;

const registroSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    ceroOcho: {
        type: Boolean,
        default: false
    },
    treceLibreDeuda: {
        solicitado: {
            type: Boolean,
            default: false
        },
        fechaPedido: {
            type: Date
        },
        fechaVencimiento: {
            type: Date
        }
    },
    informeDominioHistorico: {
        solicitado: {
            type: Boolean,
            default: false
        },
        fechaPedido: {
            type: Date
        },
        fechaVencimiento: {
            type: Date
        }
    }
});

const Registro = mongoose.model('Registro', registroSchema);
export default Registro;