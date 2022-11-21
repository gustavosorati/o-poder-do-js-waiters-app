import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export async function listProductsByCategory(request: Request, response: Response) {
  const {categoryId} = request.params;

  const categories = await Product.find().where('category').equals(categoryId);

  return response.json(categories);
}
