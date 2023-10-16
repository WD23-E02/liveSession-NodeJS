//ESM
import express from "express"
/* import path from "node:path" */

// initializing express
// creating server

const server = express()

//set our port
const PORT = 4000;

//CRUD operation
//create => POST
//read => GET
//update => PUT, PATCH
//delete => DELETE

//Request Methods (GET, POST, PATCH, PUT, DELETE) 

//route //endpoint GET "/"
/* server.get("/", (req,res)=>{
    // console.log(path.resolve(".","public/index.html"))
    // res.sendFile(path.resolve(".", "public/index.html"))
    res.sendFile("public/index.html",{root:"."})
}) */

const users = [
    {name:"Ali",age:23,id:1},
    {name:"Leon", age:24, id:2} 
]

//GET "/users"
server.get("/users", (req,res)=>{
    //request handler // controller
    //reading all users data
    //in http server 
    // res.write()+ res.end() = res.send()

    /* res.send(403) */  // if it is number (status and end)
    /* res.status(403).send("Forbibben") */
   /*  res.send("hello") */ // is it is string or object (send and end)
    res.json(users)
})


//POST "/users"
server.post("/users", (req,res)=>{
    res.send("Received POST request on /users")
})

//PATCH "/users"
server.patch("/users", (req,res)=>{
    res.send("Received PATCH request on /users")
})


//DELETE "/users"
server.delete("/users", (req,res)=>{
    res.send("Received DELETE request on /users")
})





//start listening on port
server.listen(PORT,()=>console.log("Server is running on port: ",PORT)) 

//localhost:4000
//127.0.0.1:4000