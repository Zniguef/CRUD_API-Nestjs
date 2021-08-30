import { ProductsService } from './product.service';
export declare class ProductsController {
    private producstService;
    constructor(producstService: ProductsService);
    addProduct(prodTitle: string, prodDescription: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProduct(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(prodId: string, prodTitle: string, prodDescription: string, prodPrice: number): Promise<any>;
    removeProduct(prodId: string): Promise<any>;
}
