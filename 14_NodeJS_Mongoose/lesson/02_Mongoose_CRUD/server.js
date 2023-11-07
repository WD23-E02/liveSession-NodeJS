import express from "express";
// import mongoose from "mongoose";
import coffeeRouter from "./router/coffee.js";
import DBconnection from "./connection/index.js";
const app = express();
// middleware
app.use(express.json());

// connection to DB
DBconnection();
// mongoose
//   .connect("mongodb://127.0.0.1:27017/coffeeStore")
//   .then(() => {
//     console.log("It's connected to DB");
//   })
//   .catch((err) => console.log(err));

// routers
// localhost:5000/api/coffee
app.use("/api/coffee", coffeeRouter);

app.listen(5000, () => {
  console.log("the server is running on port 5000");
});
