import express from "express";
import { GetProduct } from "../Controllers/ProductController.js";

const ProductRouter = express.Router()



ProductRouter.get("/",GetProduct)


export default ProductRouter