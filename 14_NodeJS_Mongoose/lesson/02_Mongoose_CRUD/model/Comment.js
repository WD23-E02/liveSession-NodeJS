import {Schema, model} from "mongoose";
export const commentSchema = new Schema({
  author: String,
  text: String,
});
