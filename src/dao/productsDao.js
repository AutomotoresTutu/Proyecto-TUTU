import AutoModelo from "./models/autos.model.js";

 export class ProductsDao {

    // Buscar cualquier auto por id
    async buscarPorId(autoId) {
        try {
            const productoId =  await AutoModelo.findById({_id: autoId}).lean();
            return productoId;
        } catch (error) {
            console.error('Error al buscar auto por ID:', error);
        }
    }

    async ProductoDisponiblePorId(productId) {
        try {
            const product = await AutoModelo.findById({ _id: productId, delete: false }).lean();
            return product;
        } catch (error) {
            console.error(`Error al obtener producto por ID`);
        }
    }
    
    async ProductoNoDisponiblePorId(productId) {
        try {
            const product = await AutoModelo.findById({ _id: productId, delete: true }).lean( );
            return product;
        } catch (error) {
            console.error(`Error al obtener producto no disponible por ID`);
        }
    }
    // buscar todos los productos disponibles
    async ProductosDisponibles () {
        try{
            const products = await AutoModelo.find({delete: false}).lean();
            return products;
        }catch(error){
            console.error(`Error al cargar los productos disponibles`);
        }
    }

    // buscar todos los productos vendidos
    async Productosvendidos(){
        try {
            const products = await AutoModelo.find({delete: true}).lean( );
            return products
        }catch(error){
            console.error(`Error al obtener los productos vendidos`)
        }
    }
    // Buscar todos los productos 
    async todosLosProductos(){
        try{
            const productos = await AutoModelo.find().lean();
            return productos;
        }catch(error){
            console.error(`Error al obtener todos los productos`)
        }
    }

    // Buscar auto por patente para simplificar la busqueda del vendedor o administrador.
    async buscarPorPatente(patenteAuto) {
        try {
            const productoPorPatente = await AutoModelo.findOne({ patente: patenteAuto }).lean();
            return productoPorPatente;
        } catch (error) {
            console.error('Error al buscar auto por patente:', error);
        }
    }
    
    // Posibilidad de buscar un auto por sus propiedades, ya sea modelo, km, año, etc.
    async porPropiedad(query) {
        try {
            const productoPorPropiedad =  await AutoModelo.findOne({query}).lean();
            return productoPorPropiedad;
        } catch (error) {
            console.error('Error al busca el autos por propiedad:', error);
        }
    }

    // Crear un producto con las propiedades requeridas
    async crearProducto  (producto) {
        try {
            const newProduct = await AutoModelo.create(producto);
            return newProduct;
        } catch (error) {
            console.error(`Error al crear producto`);
        }
    }

    // Modificar un auto en alguna de sus propiedades, ya sea año, km, modelo, para marcar como vendido(delete).
    async modificarProducto(productoId, updatedData) {
        try {
            const updatedProduct = await AutoModelo.findByIdAndUpdate(
                { _id: productoId },
                { $set: updatedData },
                { new: true } 
            );
            return updatedProduct;
        } catch (error) {
            console.error(`Error al actualizar producto`);
        }
    }
}
