import mongoose from 'mongoose';
const { Schema } = mongoose;

const autosSchema = new Schema({
    patente: { type: String, required: true },
    marca: {type: String, required: true },
    modelo: {type: String, required: true },
    anio: {type: Number, required: true },
    version: {type: String, required: true },
    km: {type: Number, required: true },
    color: {type: String, required: true },
    categoria: {type: Schema.Types.ObjectId, ref: 'Categoria'},
    transmision: { type: Schema.Types.ObjectId, ref: 'Transmision' },
    estado: { type: Schema.Types.ObjectId, ref: 'Estado' },
    ubicacionAuto : { type: Schema.Types.ObjectId, ref: 'Ubicacion' },
    elementosBasicos: { type: Schema.Types.ObjectId ,ref : 'ElementosBasicos'},
    titularRegistral: { type: Schema.Types.ObjectId, ref: 'TitularRegistral' }, 
    registroAutomotor: { type: Schema.Types.ObjectId, ref: 'Registro' },
    puestoPolicial: { type: Schema.Types.ObjectId, ref: 'Policia' },
    docDelVehiculo: { type: Schema.Types.ObjectId, ref: 'Documentacion' },
    deuda: { type: Schema.Types.ObjectId, ref: 'Deuda' },
    vendedor: {type: Schema.Types.ObjectId, ref: 'Vendedor'},
    comprador: {type: Schema.Types.ObjectId, ref: 'Comprador'},
    mecanica: {type: Schema.Types.ObjectId, ref: 'Mecanica'},
    postventa:{ type: Schema.Types.ObjectId ,ref : 'Posventa'},
    precio:{ type : Schema.Types.ObjectId ,ref : 'Precios'},

    historialTransacciones: [{
        fecha: { type: Date, default: Date.now },
        estado: String,
        detalles: {
            precioVenta: Number,
            comprador: String
        }
    }],
    

    // redes:{ type: Schema.Types.ObjectId ,ref : 'Redes'},
    // alistaje:{ type: Schema.Types.ObjectId ,ref : 'Alistaje'},
    // venta:{ type: Schema.Types.ObjectId ,ref : 'Venta'},
    // cierreOperacion:{ type: Schema.Types.ObjectId ,ref : 'CierreOperacion'},
    // adminOperacion:{ type: Schema.Types.ObjectId ,ref : 'AdminOperacion'},
    
    deleted: { type: Boolean, default: false },
    time: { type: Date, default: Date.now } 
});

const AutoModelo = mongoose.model('Auto', autosSchema);

export default AutoModelo;