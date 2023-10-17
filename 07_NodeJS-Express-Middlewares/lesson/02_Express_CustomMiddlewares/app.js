import express from "express"
import morgan from "morgan"

const PORT = 4000;
const app = express()


//use morgan middleware
app.use(morgan("tiny"))


//creating custom middleware
/* function customJSON(req,res,next){
    let body = ""
    req.on("data",chunk=>{
        body+=chunk
    })
    req.on("end",()=>{
        req.body = JSON.parse(body)
         next()
    })
} */
//use middleware
/* app.use(customJSON) */

//use external middleware
/* app.use(express.json()) */


//use middleware
/* app.use(customJSON, (req,res,next)=>{
    console.log("hello request")
    next()
}) */


// POST /login

app.post("/login",(req,res)=>{
   console.log(req.body)
    res.send("Request Received! ")
})


app.patch("/users",(req,res)=>{
    console.log(req.body)
    res.send("patch request received")
})


app.listen(PORT, ()=>console.log("Server is running on PORT: ",PORT))



