import { Router } from "express";
import { getProducts, addProduct, getProduct } from "../controller/product-controller.js";

export const productRoutes = Router();

productRoutes.get('/products', getProducts);
productRoutes.post('/add-product', addProduct);
productRoutes.get('/get-product', getProduct);