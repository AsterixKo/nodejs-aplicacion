import { Request, Response, Router } from 'express';
import {productController} from '../controllers/products.controller';
// import { ProductsController } from '../controllers/products.controller';

class ProductsRoutes {

    router: Router = Router();
    // productsController: ProductsController = new ProductsController();

    // Generar las rutas a través del constructor de la clase
    constructor() {
        this.router.get('/', productController.index);
        this.router.get('/show', productController.show);
        this.router.get('/showProductsView', productController.showProductsView);
    }

}

const productRoutes = new ProductsRoutes();

export default productRoutes.router;