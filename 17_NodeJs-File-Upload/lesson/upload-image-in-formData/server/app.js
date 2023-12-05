import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import fileUpload from "express-fileupload"
import ImageModel from "./models/imageSchema.js"
import stream from "stream"

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
app.use(fileUpload(/* {useTempFiles:true,  tempFileDir:"./upload"} */)) // handling form data


//create POST api/images endpoint

app.post("/api/images",async (req,res)=>{
    console.log(req.body) //  form fields data

    console.log(req.files) // file/image

    const image = await ImageModel.create({
        filename:Date.now() +"_" +req.files.image.name , 
        data : req.files.image.data
    })



   /*  req.body.profileLink = `http://localhost:5000/api/images/${image.filename}` */



    res.send({okay:"okay"})
})



app.get("/api/images/:filename" , async(req,res)=>{
    try{
        const image = await ImageModel.findOne({filename: req.params.filename})
      /*   res.send(image) */
        const readStream = stream.Readable.from(image.data) // 100mg // create stream from buffer data
   /*  const readStream = fs.createReadStream("./1.mp4") */ //create stream from image file

      readStream.pipe(res)
// res is writestream
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT, ()=>console.log("server is running on port: ",PORT))