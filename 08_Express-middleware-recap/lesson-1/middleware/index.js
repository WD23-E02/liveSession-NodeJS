// Route level middleware (it's run for specific route)
export const greeting = (req, res, next) => {
  // custom MW
  console.log(req.method);
  console.log("Hello User");
  next();
};

export const secondMW = (req, res, next) => {
  console.log("this is the second MW");
  next();
};

export const thirdMW = (req, res, next) => {
  console.log("this is the Third MW");
  next();
};

export const addId = (req, res, next) => {
  req.body.isAdmin = false;

  next();
};

export const auth = (req, res, next) => {
  if (req.body.email === "hello@gmail.com") {
    next();
  } else {
    res.send("you're not authorized");
  }
};
// MW to console information about the req

export const logger = (req, res, next) => {
  console.log(`${req.method}  ${req.url}  ${res.statusCode} `);
  next();
};
