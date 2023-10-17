const express = require("express");
const {
  swapToken,
  approveToken,
  allowanceToken,
} = require("../controllers/swapTokenControllers");
const router = express.Router();

router
  .route("/")
  // swap token
  .get(swapToken);

router
  .route("/approve")
  //approve token
  .get(approveToken);

router
  .route("/allowance")
  //allow token or not
  .get(allowanceToken);

module.exports = router;
