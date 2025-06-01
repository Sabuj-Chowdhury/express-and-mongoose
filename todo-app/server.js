const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);
  //   res.end("welcome ........");
  if (req.url === "/todos" && req.method === "GET") {
    res.end("All todos");
  } else if ((req.url = "/todos/create-todo" && req.method === "POST")) {
    res.end("Todo created");
  } else {
    res.end("Route not found!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log(`Listening at port 5000`);
});
