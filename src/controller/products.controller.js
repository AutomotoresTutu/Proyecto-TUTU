import { ProductsDao } from "../dao/productsDao.js";
const productsDao = new ProductsDao();

export class ProductsController {
    constructor() {}

    static async getProductId(req, res) {

        const autoId = req.params.autoId; 
        try {
            const productoEncontrado = await productsDao.buscarPorId(autoId);
            if (!productoEncontrado) {
                res.setHeader('Content-Type', 'application/json'); 
                return res.status(404).json({ message: 'no se ha encontrado el id proporcionado, por favor Verificar el mismo.' });
            }
            res.setHeader('Content-Type', 'application/json'); 
            return res.status(200).json(productoEncontrado);
        } catch (error) {
            console.error('Error al buscar auto por ID:', error);
            res.setHeader('Content-Type', 'application/json'); 
            return res.status(500).json({ error: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador.' });
        }
    }

    static async productosDisponibles(req,res){
        try {
            const productos = await productsDao.ProductosDisponibles();
            if(!productos){
                res.setHeader('Content-Type', 'application/json'); 
                return res.status(404).json({ message: 'Productos no encontrados' });
            }
            res.setHeader('Content-Type', 'application/json'); 
            return res.status(200).json(productos);
        } catch (error) {
            console.error(error);
            res.setHeader('Content-Type', 'application/json'); 
            return res.status(500).json({ error: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador.' });
        }
    }

    static async productosNoDisponibles(req,res){
        try {
            const productos = await productsDao.Productosvendidos();
            if(!productos){
                res.setHeader('Content-Type', 'application/json'); 
                return res.status(404).json({ message: 'Productos no encontrados' });
            }
            res.setHeader('Content-Type', 'application/json'); 
            return res.status(200).json(productos);
        } catch (error) {
            console.error(error);
            res.setHeader('Content-Type', 'application/json'); 
            return res.status(500).json({ error: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador.' });
        }
    }

    static async todosLosProductos (req,res){

        try {
            const todosLosProductos = await productsDao.todosLosProductos();
            if(!todosLosProductos){
                res.setHeader('Content-Type', 'application/json'); 
                return res.status(404).json({ message: 'Productos no encontrados' });
            }
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json(todosLosProductos);
        } catch (error) {
            console.error(error);
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ message: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador' });
        }

    }

    static async buscarPorPatente (req,res){
        let {patente} = req.body;

        if (!/^[A-Z]*$/.test(patente)) {
            patente = patente.toUpperCase(); 
        }
        try {
            const autoPorPatente = await productsDao.buscarPorPatente(patente);
            if(autoPorPatente){
                res.setHeader('Content-Type', 'application/json');
                return res.status(404).json({ message: 'No se ha encontrado la patente solicitada, verificar por favor la misma.' });
            };
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json(autoPorPatente);

        } catch (error) {
            console.error(error);
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ message: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador' });
        }
    }

    static async buscarPorPropiedad (req,res) {

        let {propiedad} = req.body;
        try {
            const producto = await productsDao.porPropiedad(propiedad);
            if(!producto){
                res.setHeader('Content-Type', 'application/json');
                return res.status(404).json({ message: 'Propiedad no encontrada' });
            }
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json(producto);

        } catch (error) {
            console.error(error);
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ message: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador' });
        }
    }

    static async crearProducto (req,res ){
        try {
            const nuevoProductoData = req.body;
            const propiedades = ['patente', 'marca', 'modelo', 'km', 'año', 'color', 'categoria'];

            for (const campo of propiedades) {
                if (!nuevoProductoData[campo]) {
                    req.logger.error('Todos los campos son obligatorios')
                    res.setHeader('Content-Type', 'application/json');
                    return res.status(400).json({ error: `El campo '${campo}' es obligatorio.` });
                }
            }

            const existeProducto = await productsDao.buscarPorPatente(nuevoProductoData.patente);
                if (existeProducto) {
                    req.logger.error('Ya existe un producto con el codigo proporcionado')
                    res.setHeader('Content-Type', 'application/json');
                    return res.status(400).json({ error: `Ya existe un producto con el código '${nuevoProductoData.patente}'.` });
                }
            await productsDao.crearProducto(nuevoProductoData);
            res.setHeader('Content-Type', 'application/json');
            return res.status(201).json({ success: true, message: 'Producto agregado correctamente.', nuevoProductoData });
            
        } catch (error) {
            console.error(error);
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ message: 'Error inesperado en el servidor - Intente más tarde, o contacte a su administrador' });
        }
    }


}