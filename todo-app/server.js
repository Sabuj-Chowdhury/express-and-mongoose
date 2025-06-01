const http = require("http");
const { json } = require("stream/consumers");

const data = [
  {
    title: "prima",
    body: "learn prima",
  },
  {
    title: "typescript",
    body: "learn typescript",
  },
];

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);
  //   res.end("welcome ........");
  if (req.url === "/todos" && req.method === "GET") {
    // res.end("All todos");
    res.writeHead(200, {
      //   "content-type": "application/json",//to send JSON data
      "content-type": "text/html", //to send HTML data
      email: "email@mail.com",
    });
    // another way setting up the headers
    // res.setHeader("content-type", "text/plain");
    // res.setHeader("email", "sa@mail.com");
    // res.statusCode = 300;
    // res.end(JSON.stringify(data));
    res.end(`<h1>HEllo</h1>
        <h2>HEllo</h2>
        <h3>HEllo</h3>
        <h6>HEllo</h6>`);
  } else if ((req.url = "/todos/create-todo" && req.method === "POST")) {
    res.end("Todo created");
  } else {
    res.end("Route not found!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log(`Listening at port 5000`);
});
