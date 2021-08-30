import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private producstService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.producstService.inserProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllProduct() {
    const products = await this.producstService.getProducts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.producstService.getAsingleProduct(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    await this.producstService.updateProduct(
      prodId,
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return null;
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.producstService.deleteProduct(prodId);
    return null;
  }
}
