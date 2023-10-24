import express from "express"
import cors from "cors"
import { users } from "./models/usersData.js";
const PORT = 5000;

const app = express()
//cors middleware allow origin http://localhost:5173
app.use(cors({origin:"http://localhost:5173"}))


//serve static pages 
app.use(express.static("./views/static"))

//RRC
/* app.get("/", (req,res)=>{
    res.sendFile("views/index.html", {root:"."})
}) */


app.get("/users", (req,res)=>{
    res.send(users)
})

app.listen(PORT,()=>console.log("server is running on port: ",PORT))