import {Schema,model } from "mongoose"
/* A Mongoose Schema defines the structure and property of the document in the MongoDB collection. This Schema is a way to define expected properties and values along with the constraints and indexes. Refer to Introduction to mongoose to learn about mongoose in detail. A Compiled version of the Schema is known as a Model. */

const UserSchema = new Schema({
    firstName: String,
    lastName: String, 
    age: Number,
    email: String, 
    password: String
})


const UserCollection = model("users",UserSchema)

export default UserCollection;