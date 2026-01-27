import express from "express"
import { addorder,getOrders,updateOrder,deleteOrder } from "../controller/order.controller.js"
const userRoute=express.Router()
userRoute.post("/",addorder);
userRoute.get("/",getOrders);
userRoute.patch("/:id",updateOrder);
userRoute.delete("/:id",deleteOrder);
export default userRoute