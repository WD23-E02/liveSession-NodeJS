import express from "express";
import {
  logger,
  auth,
  greeting,
  secondMW,
  thirdMW,
  addId,
} from "./middleware/index.js";

import "dotenv/config";

const app = express();

/**
 * WHAT IS MIDDLEWARE?
 * Middleware is a function that has access to request, response and next middleware. It is called
 * whenever a request receive to backend, before send back a response.
 * it's sequential , its work from top to bottom
 *
 */

/**
 *How to create MW:
 * 1. defining a middleware as a function
 * 2. call middleware for one route `app.get('/',firstMW,  greeting);`
 * or call middleware for all routes `app.use(firstMW);
 */

/**
 * INSTRUCTIONS:
 * 1. defining a middleware as a function
 * 2. call middleware for one route `app.get('/',firstMW,  greeting);`
 * or call middleware for all routes `app.use(firstMW);
 */
// Application level middleware (all routes)
app.use(express.json()); // built-in MW

// app.use(cors()); // third party MW

app.use(logger);

/* --------------------------- * Route ==== http://localhost:5000 -------------------------- */
app.get("/", greeting, secondMW, thirdMW, (req, res) => {
  res.send("Hello this is the home");
});

app.post("/user", addId, (req, res) => {
  res.send(req.body);
});

app.post("/profile", auth, (req, res) => {
  res.send(req.body);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("the server is running on", PORT);
});
