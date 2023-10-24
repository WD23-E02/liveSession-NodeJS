import express from "express"
import morgan from "morgan"
import cors from "cors"
import {users} from "./models/users.js"
const PORT = 4000;

const app = express()

/* const users = [] */

//morgan middleware
app.use(morgan("dev"))

//parse json incoming data
app.use(express.json())

//parse url-encoded data
app.use(express.urlencoded({extended:true}))


//external cors middleware
app.use(cors({origin:"http://localhost:5173"}))

//custom cors middleware
/* app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:5173")
    next()
}) */



//serve static pages middleware
app.use(express.static("./views/public"))



//index route
app.get("/", (req,res)=>{
    res.sendFile("views/index.html", {root:"."})
})

//GET /users
app.get("/users",(req,res)=>{
    res.send(users)
})

/* // /styles/style.css
app.get("/styles/style.css",(req,res)=>{
    res.sendFile("views/styles/style.css",{root:"."})
})
 */
// GET /login
app.get("/login",(req,res)=>{
    res.sendFile("views/login.html", {root:"."})
})


// GET /register
app.get("/register", (req,res)=>{
    res.sendFile("views/register.html", {root:"."})
})


//POST /register
app.post("/register",(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.send({message: "you successfully registered on our webpage!"})
    /* res.redirect("/login") */
})

app.listen(PORT, ()=>console.log("server is running on port : ",PORT))