import express from "express"

const PORT = 4000;
const app = express()

//middleware is a function which has access to req,res objects and next function
//middleware can send response to client or it can forward your request to (next middleware/ function)
//middleware is a function that executes in between RRC(request response cycle).

//express json middleware to parse incoming json data
app.use(express.json()) //application level middleware , work for any request you receive on the server


/* app.use( (req,res,next)=>{ */
   /* console.log(new Date().toTimeString(), req.method , req.url) */
   //forward request to main controller
    
  /*  if(req.method==="POST"){
        return res.send("we dont accept post method")
   } */
  /*  next() */
 
/* } ) */


// GET /users
app.get("/users",(req,res)=>{
    res.send("Hello")
})

//fake db 
const userData = {
    firstName:"Ismael",
    email: "username@gmail.com",
    password:"12345"
}

//middleware to check email and password present in the req body
//Route level middleware
function checkEmailAndPassword(req,res,next){
    if(req.body.email  && req.body.password){
        next() //forwarding request
        }else{
        res.send("email or password missing ! this message is from middleware") //send back response
    }
}


app.post("/login",checkEmailAndPassword ,(req,res)=>{
    //main controller
    if(req.body.email === userData.email && req.body.password === userData.password){
        res.send("you successfully logged in!")
    }else{
        res.send("email or password doesn't match")
    }
})


app.use("/users", (req,res)=>{
    res.send("Working ....")
})


app.listen(PORT, ()=>console.log("server is running on port: ",PORT))