const http = require("http");
const app = require("./app");
const config = require("./utils/config.js");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`);
});
