//  http to make communication over the internet

// const http = require('http') //commonJS  built-in node

import http from "http"; // ejs module
import fs from "fs";
import axios from "axios";
//  create a server
// const server = http.createServer( async (req, res) => {
const server = http.createServer((req, res) => {
  //  http:localhost:5000/posts (/posts is the endpoint , also called route )
  //  console.log(req.url);
  //   console.log(req.method);
  /* --------------------------- *  Route is / : -------------------------- */
  if (req.url === "/") {
    // endpoint is  /
    console.log(req.url);
    // data would pass with the res to the client
    res.write("hello your requested is the home page");
    // we have to end the res
    res.end();
    return;
  }
  /* --------------------------- *  Route is /about -------------------------- */
  if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      try {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
      } catch (err) {
        res.write("there is an error");
        res.end();
      }
    });
    return;
  }
  /* --------------------------- *  Route is /menu -------------------------- */
  if (req.url === "/menu") {
    fs.readFile("menuu.html", (err, data) => {
      try {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});

        res.write(data);
        res.end();
      } catch (error) {
        res.writeHead(404, {"Content-Type": "text/html"});
        // console.log(error);
        // res.write("there is some error");
        // res.end();

        fs.readFile("pageNotFound.html", (err, data) => {
          res.write(data);
          res.end();
        });
      }
    });
  }

  if (req.url === "/users") {
    //using async/await
    // const results = await axios.get("https://randomuser.me/api");
    // console.log(results.data);

    axios.get("https://randomuser.me/api").then((results) => {
      res.write(JSON.stringify(results.data));
      res.end();
    });
  }
});

// the server listen on port , localhost:5000
// server.listen(port , ()=>{})
server.listen(5000, () => console.log("the server is running on port 5000 😃"));
