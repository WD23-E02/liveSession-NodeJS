import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

// Application Level MW

app.use(express.json()); // built-in mw

app.use(cors()); // external MW

app.use(morgan("tiny")); // external MW

const secret = (req, res, next) => {
  console.log(req.query);
  if (req.query.secret === "TomBrad2024") {
    next();
  } else {
    res.status(401).send("You're not allowed to get data");
  }
};

const checkApi = (req, res, next) => {
  if (req.query.key === "123hello") {
    next();
  } else {
    res.send(" register to get api key");
  }
};

// app.use((req, res, next) => {
//   if (req.url === "/") {
//     const err = new Error("your IP is not allowed");
//     return next(err);
//   }
//   next();
// });

app.use("/api", checkApi); // use custom secret mw, this one will invoked every time the server receives a request starting with "/api"

const auth = (req, res, next) => {
  if (req.body.email === "Hello@gmail.com") {
    next();
  } else {
    res.send("You're not authorized to account");
  }
};

// Route Level
/* --------------------------- * Route-1  mw * --------------------------- */
app.get("/user", (req, res) => {
  res.send("Hello there ");
});
/* --------------------------- * Route-2 with secret -------------------------- */
app.get("/data", secret, (req, res) => {
  res.status(200).jsonn({data: {name: "Leon", isAdmin: true}});
});
/* --------------------------- * Route-2 with auth -------------------------- */
app.post("/account", auth, (req, res) => {
  res.send(req.body);
});

app.get("/api", (req, res) => {
  res.send("here is your data");
});

app.get("/api/products", (req, res) => {
  res.status(200).json({products: {item: "T-shirt", size: "small"}});
});
// example on how to handle the error once it's appear
app.get("/hello", (req, res, next) => {
  if (req.query.id === "1234") {
    res.status(200).send(" welcome back");
  } else {
    // create an error
    const err = new Error("Invalid id");
    err.status = 401;
    // next with the error you created , this next with error will invoke only the middleware error handling
    next(err); // trigger the error handler MW
  }
});

app.use((req, res, next) => {
  console.log("I'm after the error");
});

/* ----------- * Handle not found page , should be at the end after all routes -------------- */
app.use((req, res, next) => {
  res.status(404).send("Page not found 🙄");
});

/* ------------- * Error middleware handling should come at the end after the not found mw --------------- */

// const handleError = (err, req, res, next) => {
//   console.log(err);
//   res.status(err.status || 500).send(err.message || "Internal server error");
// };

// app.use(handleError);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running on port 8000 🎉");
});

// fetch( url, { method: POST, body: { name: "Leon" } }) // req.body

// fetch("url / ${id}") // req.params( // url /: id)

//with get method fetch("movies?title=GodFather") // req.query
