import { Request, Response } from 'express';
import { Category } from '../../app/models/Category';

export async function createCategory(request: Request, response: Response) {
  try {
    const { name, icon } = request.body;

    const category = await Category.create({
      name,
      icon
    });

    return response.status(201).json(category);
  } catch(error) {
    console.log(error);
    response.sendStatus(500);
  }
}
