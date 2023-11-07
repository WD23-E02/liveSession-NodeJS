import mongoose from "mongoose";

function DBconnection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/coffeeStore")
    .then(() => {
      console.log("It's connected to DB");
    })
    .catch((err) => console.log(err));
}

export default DBconnection;
