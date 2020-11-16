
import { Request, Response } from 'express';
export default class ProductsRoutes {

    private products = [
        {
            id: '1',
            title: 'Product 1'
        },
        {
            id: '2',
            title: 'Product 2'
        }
    ];

    public index(req: Request, res: Response) {
        res.send(this.products)
    }
}