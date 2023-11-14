import { Router } from "express";
const router = Router()
import {getAllOrders,getSingleOrder,createOrder,updateOrder,deleteOrder} from "../controllers/orderControllers.js"


// "/api/orders"
router.get("/allorders", getAllOrders) //read
router.get("/singleorder/:id", getSingleOrder) //read sindle order
router.post("/neworder", createOrder) // create
router.patch("/update/:id", updateOrder) // update
router.delete("/delete/:id", deleteOrder) //delete
 
export default router;