import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export async function listOrders(request: Request, response: Response) {
  try {
    const orders = await Order.find()
      .sort({createdAt: 1})
      .populate('products.product');

    return response.json(orders);
  } catch (error) {
    console.log(error);
    return response.sendStatus(500);
  }
}
