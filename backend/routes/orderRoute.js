import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware);


export default orderRouter;