import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export async function createProduct(request: Request, response: Response) {
  try {
    const { name, description, ingredients, price, category } = request.body;
    const imagePath = request.file?.filename;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath,

    });

    return response.status(201).json(product);
  } catch(error) {
    console.log(error);
    response.sendStatus(500);
  }
}
