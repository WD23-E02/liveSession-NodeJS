import {Schema,model} from "mongoose"


const ImageSchema = new Schema({
filename: {type:String, required:true},
data: {type:String}
})


const ImageModel = model("images",ImageSchema)


export default ImageModel;