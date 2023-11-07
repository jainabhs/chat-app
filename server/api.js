const express = require("express");
const cors = require("cors");
const io = require("socket.io");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// initialize Express.....
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello" }).status(200);
});

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.listen(process.env.APP_PORT, () => {
  console.info(`Express app listening on PORT:::${process.env.APP_PORT}`);
});
