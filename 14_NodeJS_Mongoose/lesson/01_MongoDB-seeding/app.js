import mongoose from "mongoose"
import UserCollection from "./usersSchema.js"

/* mongoose.connect("mongodb://127.0.0.1:27017/mongooseDB")
.then(()=>console.log("connection established successfully!"))
.catch(err=>console.log(err)) */


try{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongooseDB")
    console.log("connection established successfully!")
}
catch(err){
    console.log(err)
}

async function main(){
    //create a new user
  try{
    const user =  await UserCollection.create({
        firstName:"Naqvi",
        lastName:"Raza",
        age:23,
        email:"test@gmail.com",
        password:"123abc"
    })
  console.log(user)
  }
  catch(err){
    console.log(err)
  }

} 

main()
//mongoDB is Schemaless 
//mongoose allows you to write schema for your data
//Schema is a structure of your documents / set of rules 