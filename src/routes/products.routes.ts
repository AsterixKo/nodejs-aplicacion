
import { Request, Response, Router } from 'express';

interface Products {
    id: Number,
    title: String
}
class ProductsRoutes {

    router: Router = Router();

    private products: Array<Products> = [
        { id: 1, title: 'TV 32 "' },
        { id: 2, title: 'XBOX' }
    ];

    // Generar las rutas a través del constructor de la clase
    constructor() {
        this.router.get('/', (req: Request, res: Response) => {
            res.send(this.products);
        });

    }

}

const productRoutes = new ProductsRoutes();

export default productRoutes.router;