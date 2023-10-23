import express from "express";

import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  /* console.log("Thanks for visiting us!") */
  /* if(req.method==="DELETE"){
        res.status(401).send("we don't allow delete request !")
    }else{
        next() 
    } */
  next();
});

app.get("/", (req, res) => {});

app.post("/", (req, res) => {});

app.patch("/", (req, res) => {});

app.delete("/", (req, res) => {});

app.get("/users", (req, res) => {
  res.send("I am a main function");
});

app.listen(3000, () => console.log("server is running on port 3000"));
