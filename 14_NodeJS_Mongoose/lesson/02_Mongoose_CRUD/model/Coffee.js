import {Schema, model} from "mongoose";
import {commentSchema} from "./Comment.js";
const CoffeeSchema = new Schema({
  name: String,
  price: Number,
  ingredients: [String],
  // the size should be one of these values
  size: {type: String, enum: ["s", "m", "l", "xl"]},
  //! nested path
  // comments: {
  //   author: String,
  //   text: String,
  // },
  //! nested subDocuments, nested documents
  // comments: [
  //   {
  //     author: String,
  //     text: String,
  //   },
  // ],
  //! nested schema

  comments: [commentSchema],

  rating: {type: Number, min: 1, max: 5, required: true},
  //
});

const Coffee = model("Coffee", CoffeeSchema);

export default Coffee;
