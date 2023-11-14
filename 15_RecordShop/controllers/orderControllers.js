import OrderModel from "../models/orderSchema.js"


export const getAllOrders=async(req,res,next)=>{
    try{
        const allOrders = await OrderModel.find()
        res.send(allOrders)
    }
    catch(err){
        next(err)
    }
}

export const getSingleOrder=async(req,res,next)=>{
    // "/api/orders/singleorder/343v24kh2v3h42jh52" get
    try{
        const singleOrder = await OrderModel.findById(req.params.id)
        res.send(singleOrder)
    }
    catch(err){
        next(err)
    }
}

export const createOrder=async(req,res,next)=>{
    try{
        const order = await OrderModel.create(req.body)
        res.send(order)
    }
    catch(err){
        next(err)
    }
}

export const updateOrder=async(req,res,next)=>{
    // "/api/orders/singleorder/343v24kh2v3h42jh52" patch
    try{
        const updateOrder = await OrderModel.findByIdAndUpdate(req.params.id , req.body ,{new:true})
        res.send(updateOrder)
    }
    catch(err){
        next(err)
    }
}

export const deleteOrder=async(req,res,next)=>{
    // "/api/orders/singleorder/343v24kh2v3h42jh52" delete
    try{
        const deleteOrder = await OrderModel.findByIdAndDelete(req.params.id)
        res.send(deleteOrder)
    }
    catch(err){
        next(err)
    }
}