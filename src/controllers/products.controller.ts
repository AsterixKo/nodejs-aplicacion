import { Request, Response } from 'express';



class ProductsController {

    private products: Array<ProductsInterface>;

    constructor() {
        this.products = [
            { id: 1, title: 'TV 32 "' },
            { id: 2, title: 'XBOX' }
        ];
    }

    public index(req: Request, res: Response) {
        res.send(productController.products);
    }
    public show(req: Request, res: Response) {
        res.render('layouts/show', { title: 'prueba' });
    }
}

export const productController = new ProductsController();
// export default ProductsController;
export interface ProductsInterface {
    id: Number,
    title: String
}

// export default productController.index;