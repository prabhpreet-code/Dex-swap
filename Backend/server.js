const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();
const Moralis = require("moralis").default;

//middlewares
app.use(cors());
app.use(express.json());

//token price routes are here.
app.use("/api/tokenPrice", require("./src/routes/tokenRoutes"));
//swap routes are here.
app.use("/api/swap", require("./src/routes/swapRoutes"));

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(3001, () => {
    console.log(`Listening for Calls`);
  });
});
