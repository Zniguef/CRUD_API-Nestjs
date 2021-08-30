import { Product } from './products.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    inserProduct(title: string, description: string, price: number): Promise<string>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getAsingleProduct(productId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<void>;
    deleteProduct(prodId: string): Promise<void>;
    private findProduct;
}
