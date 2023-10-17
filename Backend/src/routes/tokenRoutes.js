const express = require("express");
const { fetchTokenPrice } = require("../controllers/tokenPriceControllers");
const router = express.Router();

router
  .route("/")
  //gets token prices
  .get(fetchTokenPrice);

module.exports = router;
