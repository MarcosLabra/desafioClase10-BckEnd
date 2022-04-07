import { Router } from "express";
import { getProductos, getProducto, deleteProducto, addProducto, updateProducto} from '../controllers/productos.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Esta es la ruta de prueba get')
});

router.get('/productos', (req, res) => {
    let productos = getProductos();
    res.render('productos', {productos});
});


router.get('/productos/:id', async (req, res) => {
    const id = req.params.id;
    let producto = getProducto(id);
    res.send(producto);
});

router.post('/productos', (req, res) => {
    let productoNuevo = addProducto(req.body);
    res.redirect('/api/productos');
});

router.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    let productoNuevo = req.body;
    let producto = updateProducto(id, productoNuevo);
    res.send(producto);
});

router.delete('/productos/:id',  (req, res) => {
    const id = req.params.id;
    let producto =  deleteProducto(id);
    res.send(producto);
});

export default router;