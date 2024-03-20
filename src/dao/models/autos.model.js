import mongoose from 'mongoose';
const { Schema } = mongoose;

const autosSchema = new Schema({
    patente: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    km: { type: Number, required: true },
    año: { type: Number, required: true },
    color: { type: String, required: true },
    // agregar categoria 
    categoria: {
        type: String,
        enum: ['propio', 'consigna'],
        required: true
    },
    observaciones: { type: String },
    titularRegistral: { type: Schema.Types.ObjectId, ref: 'titularRegistral' }, 
    Contacto: { type: Schema.Types.ObjectId, ref: 'Contacto' }, 
    registroAutomotor: { type: Schema.Types.ObjectId, ref: 'Registro' },
    puestoPolicial: { type: Schema.Types.ObjectId, ref: 'Policia' },
    docDelVehiculo: { type: Schema.Types.ObjectId, ref: 'Doc' },
    deuda: { type: Schema.Types.ObjectId, ref: 'Deuda' },
    elementos:{ type :Schema.Types.ObjectId ,ref :'Elementos'},
    precio:{ type :Schema.Types.ObjectId ,ref :'Precios'},
    peritaje:{ type :Schema.Types.ObjectId ,ref :'Peritaje'},
    gestoria:{ type :Schema.Types.ObjectId ,ref :'Gestoria'},
    redes:{ type :Schema.Types.ObjectId ,ref :'Redes'},
    ubicacionAuto:{ type:String },
    preparado:{ type :Schema.Types.ObjectId ,ref :'Preparado'},
    venta:{ type :Schema.Types.ObjectId ,ref :'Venta'},
    postventa:{ type :Schema.Types.ObjectId ,ref :'Posventa'},
    cierreOperacion:{ type :Schema.Types.ObjectId ,ref :'CierreOperacion'},
    adminOperacion:{ type :Schema.Types.ObjectId ,ref :'AdminOperacion'},
    vendedor: {type :Schema.Types.ObjectId, ref:'Vendedor'},
    
    delete: { type: Boolean, default: false }, 
    time: { type: Date, default: Date.now } 
});

const AutoModelo = mongoose.model('Auto', autosSchema);

export default AutoModelo;