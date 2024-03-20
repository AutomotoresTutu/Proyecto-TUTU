import mongoose from 'mongoose';
const { Schema } = mongoose;

const policiaSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    verificacionPolicial: {
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

const Policial = mongoose.model('Policial', policiaSchema);
export default Policial;