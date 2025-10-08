import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder,userOrder } from "../controllers/orderController.js";
import pkg from "jsonwebtoken";  
const { verify } = pkg;          

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder",authMiddleware,userOrder)

export default orderRouter;
