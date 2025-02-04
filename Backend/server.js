const dotenv = require("dotenv");
dotenv.config("D:UberCloneBackend.env");
const http = require("http");
const port = process.env.PORT || 3000;
const connectDb = require("./db/db.js");

const server = http.createServer();
connectDb();
server.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
