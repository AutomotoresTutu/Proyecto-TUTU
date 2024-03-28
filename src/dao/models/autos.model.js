import mongoose from 'mongoose';
const { Schema } = mongoose;

const autosSchema = new Schema({
    patente: { type: String, required: true },
    caracteristicasPrincipales: { type: Schema.Types.ObjectId, ref: 'Caracteristicas'},
    marca: { type: Schema.Types.ObjectId, ref: 'Marca' },
    modelo: { type: Schema.Types.ObjectId, ref: 'Modelo' },
    anio: { type: Schema.Types.ObjectId, ref: 'AnioFabr' },
    version: {type: Schema.Types.ObjectId, ref: 'Version'},
    km: { type: Schema.Types.ObjectId, ref: 'Km' },
    color: { type: Schema.Types.ObjectId, ref: 'Color' },
    categoria: {type: Schema.Types.ObjectId, ref: 'Categoria'},
    observaciones: { type: Schema.Types.ObjectId, ref: 'Observaciones' },
    titularRegistral: { type: Schema.Types.ObjectId, ref: 'titularRegistral' }, 
    contacto: { type: Schema.Types.ObjectId, ref: 'Contacto' }, 
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