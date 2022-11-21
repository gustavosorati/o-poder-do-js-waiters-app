import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export async function deleteOrderById(request: Request, response: Response) {
  try {
    const { orderId } = request.params;

    await Order.findByIdAndDelete(orderId);

    return response.sendStatus(204);
  } catch(error) {
    console.log(error);
    return response.sendStatus(500);
  }
}
