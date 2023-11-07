import {Schema, model} from "mongoose";

const CoffeeSchema = new Schema({
  name: String,
  price: Number,
  ingredients: [String],
  size: {type: String, enum: ["s", "m", "l", "xl"]}, // the size should be one of these values

  // comments: {

  //   author: String,
  //   text: String

  // }
});

const Coffee = model("Coffee", CoffeeSchema);

export default Coffee;
