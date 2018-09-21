const app = require("./app");
const http = require("http");
const port = process.env.PORT || 8000;

app.set("port", port);

const server = app.listen(port, function() {
  console.log("Server running at http://localhost:" + server.address().port);
});
