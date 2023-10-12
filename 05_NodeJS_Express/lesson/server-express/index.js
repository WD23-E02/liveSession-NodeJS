// 1-import express
import express from "express";
import path from "path";
// 2- call express and save it to variable app

const app = express();

//! to read the body in request we have to use the below function

app.use(express.json());

/* --------------------------- * Route -1 localhost:8000/ -------------------------- */

app.get("/", (req, res) => {
  res.status(200).send("Hello this is the Home Page");
});

/* --------------------------- * Route -2  localhost:8000/about-------------------------- */

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(".", "about.html"));
});

app.get("/user", (req, res) => {
  const userData = {name: "Lee", password: "1234"};

  res.send(userData);
});

app.post("/info", (req, res) => {
  console.log(req.body);
  //   res.send(req.body);
  const data = req.body;
  res.status(203).json(data);
});
// 3- listen to the port
app.listen(8000, () => console.log("The server is running on port 8000 😃"));
