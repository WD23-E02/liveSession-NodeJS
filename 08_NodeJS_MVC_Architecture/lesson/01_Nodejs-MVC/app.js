import express from "express"
import { getProducts } from "./controllers/productControllers.js";
import userRoutes from "./routes/userRoutes.js"

const PORT = 4000;
//initializing our server // create express server
const app = express()

//follow MVC design architecture
// M stands model => The backend that contains all the data logic
// V stands view => The frontend or graphical user interface (GUI)
// C stands Controller => The brains of the application that controls how data is displayed

app.use("/users",userRoutes )

//endpoints /products
//GET /products
app.get("/products",getProducts)


//endpoints /orders
app.get("/orders",(req,res)=>{
    res.send("we received get request on /orders")
})


app.listen(PORT, ()=>console.log("server is running on port: ",PORT))
