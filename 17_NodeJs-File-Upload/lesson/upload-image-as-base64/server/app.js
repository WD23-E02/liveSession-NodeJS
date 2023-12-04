import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import fs from "fs"
import ImageModel from "./models/imageSchema.js"

try{
    await mongoose.connect("mongodb://127.0.0.1:27017/fileupload-db")
    console.log("DB connection established !")
}
catch(err){
    console.log(err)
}

const app = express()
const PORT = 5000;

app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json({limit:"100mb"})) //default limit is 2MB 



//create POST api/images endpoint

app.post("/api/images",async (req,res)=>{
    console.log(req.body)
    /* const binaryData = new Buffer.from(req.body.image, "base64")
    fs.writeFileSync("./upload/1.jpeg", binaryData) */
    const image = await ImageModel.create({
        filename:Date.now()+".jpg", 
        data: req.body.image
    })




    res.send({okay:image})
})


app.listen(PORT, ()=>console.log("server is running on port: ",PORT))