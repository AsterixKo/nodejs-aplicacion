
import { Request, Response, Router } from 'express';
// import router from '.';
class ProductsRoutes {

    router: Router = Router();

    // Generar las rutas a través del constructor de la clase
    constructor() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send('Ok');
        });
        
    }

    // private products = [
    //     {
    //         id: '1',
    //         title: 'Product 1'
    //     },
    //     {
    //         id: '2',
    //         title: 'Product 2'
    //     }
    // ];

    // public index(req: Request, res: Response) {
    //     res.send(this.products)
    // }
}

const productRoutes = new ProductsRoutes();

export default productRoutes.router;