import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find();

    return response.json(products);
  } catch (error) {
    console.log(error);
    return response.sendStatus(500);
  }
}
