import http from "http";
import fs from "fs";
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        res.write("hello there from home");
        res.end();
        break;

      case "/about":
        fs.readFile("about.html", (err, data) => {
          res.write(data);
          res.end();
        });
        break;
    }
  }

  if (req.method === "POST") {
    switch (req.url) {
      case "/user":
        // create a string to collect data from client
        let body = "";
        // when the req receive data as chunk
        req.on("data", (chunk) => {
          body += chunk; // collect the information from the client
        });
        req.on("end", () => {
          console.log(body);

          const parsedBody = JSON.parse(body);

          console.log(parsedBody);
          res.write(JSON.stringify(parsedBody));
          res.end();
        });
        break;
      default:
        res.write("no data received");
        res.end();
    }
  }
});

server.listen(5000, () =>
  console.log("the server is connected to port 5000 😃")
);
