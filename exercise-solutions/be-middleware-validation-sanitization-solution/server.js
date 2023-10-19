import express, { json } from "express"
import cors from "cors"
import { sanitizationResponse, validationResponse } from "./controllers/userControllers.js"
import { sanitizeName, stringsToNumbers, sortBands } from "./midleware/sanitization.js"
import { validateKeys, isAdult, isFam } from "./midleware/validation.js"

const app = express()

/* EXPRESS MIDDLEWARE */
app.use(json())
app.use(cors())

/* ROUTES */
app.post("/validateUser", validateKeys, isAdult, isFam, validationResponse)
app.post("/sanitizeUser", sanitizeName, stringsToNumbers, sortBands, sanitizationResponse)

/* GLOBAL ERROR HANDLING MIDDLEWARE */
app.use(function errorHandler(err, req, res, next) {
  console.error("Error during request processing", err)
  res.status(err.status || 500)
  res.send({
    error: {
      message: err.message,
    },
  })
})

/* Start listening */
const port = 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
