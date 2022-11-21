import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { deleteOrderById } from './useCases/orders/deleteOrderById';

export const router = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname, '..', 'uploads'));
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// list categories
router.get('/categories', listCategories);

// create categories
router.post('/categories', createCategory);

// list products
router.get('/products', listProducts);

// create products
router.post('/products', upload.single('image'), createProduct);

// list products by categorys
router.get('/categories/:categoryId/products', listProductsByCategory);

// list orders
router.get('/orders', listOrders);

// create order
router.post('/orders', createOrder);

// change order status
router.patch('/orders/:orderId', changeOrderStatus);

// delete/cancel order
router.delete('/orders/:orderId', deleteOrderById);
