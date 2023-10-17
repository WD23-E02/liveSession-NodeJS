import express from "express"


const PORT = 4000;

//initializing express / creating server
const app = express()

//middleware is a function which has access to request object,response object and next function 
/* app.use((req,res,next)=>{
    if(req.method==="POST"){
       res.send("we dont accept any post method request! ")  // RRC request response cycle 
    }
    console.log("I am middleware")
    next()
}) */

//logger middle //custom middleware
/* function log(req,res,next){
    console.log("Method: ",req.method)
    console.log("URL: ", req.url)
    next()
}
app.use(log) */

/* app.use(express.json())
app.use(express.static("public"))
app.use(bodyParser())
app.use(cors()) */


//custom middleware => you can response back to client or forward your request
//external middleware => will never send reponse back to client, only forward your request


function middlewareOne (req,res,next){
   /*  console.log("Hello i am first middleware") */
    /* res.send("I am finished") //RRC finished */
  /*   next() */
}

function mainFunc(req,res,next){
    /* res.send("I am a main function")  *///RRC over
   /*  next() */
}

/* 
app.get("/test",middlewareOne , mainFunc ) */


// GET /users
app.get("/users", (req,res)=>{
    //request handler // controller
    res.send("received request on /users")
})



// GET /travel
app.get("/travel", (req,res)=>{
    //request handler // controller
    res.send("received request on /travel")
})

// POST /login
app.post("/login", (req,res)=>{
    // 10,000 request

    res.send("received post request on /login")
})





app.listen(PORT, ()=>console.log("Server is running on port: ",PORT))

