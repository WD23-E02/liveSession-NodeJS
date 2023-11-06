//connect your app to mongodb
import mongoose, {Schema,model} from "mongoose"
import  {faker} from "@faker-js/faker"

//making mongoose connection
try{
    await mongoose.connect("mongodb://127.0.0.1:27017/shop")
   /*  await mongoose.connect("mongodb://127.0.0.1:27017,{dbName:"shop"}) */
    console.log("connection established")
}
catch(err){
    console.log(err)
}

const ProductSchema = new Schema({
    title: String, 
    year: Number,
    price:Number
})

//set/create collection
const ProductModel = model("products", ProductSchema)

//seed//add data into products collection
for(let i = 0; i<100;i++){
   await ProductModel.create({
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    year:  faker.date.past()
})

/* const product = new ProductModel({
    title:faker.commerce.productName(),
    price:faker.commerce.price(),
    year:faker.date.past()
})
 product.save() */

}

//close mongoose connection
mongoose.connection.close()



