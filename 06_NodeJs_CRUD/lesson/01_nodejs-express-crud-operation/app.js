//ESM
import express from "express"
/* import path from "node:path" */

// initializing express
// creating server

const server = express()

//set our port
const PORT = 4000;

//express json middleware .. to parse incoming json data returns you in req.body

server.use(express.json())
 /* let body = ""
     req.on("data",(chunk)=>{
        body+=chunk   {"name": "Joseph", "age":26}
    })
    req.on("end",()=>{
        req.body = JSON.parse(body)
        console.log(req.body)
    }) */

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
    
    users.push({...req.body, id:users.length+1})

    res.send(users)
})

//PATCH or //PUT "/users"
//PUT request replace old resource/record with new one => replace user wwith id:2
/* {
    id:6,
    name:"Leon",
    age:23
} */
//PATCH request update existing resource/record
/* {
    id:2,
    name:"Naqvi",
    age:25
} */
//dynamic route
server.patch("/users/:id", (req,res)=>{
    console.log(req.params.id) // {id:"1"}
    const user = users.find(item=>item.id=== Number(req.params.id))
    user.name=req.body.name
    res.send(users)
})



//DELETE "/users"
server.delete("/users/:id", (req,res)=>{
    console.log(req.params.id) 
    const index = users.findIndex(item=>item.id === Number(req.params.id))
    users.splice(index,1)

    res.send(users)
})





//start listening on port
server.listen(PORT,()=>console.log("Server is running on port: ",PORT)) 

//localhost:4000
//127.0.0.1:4000