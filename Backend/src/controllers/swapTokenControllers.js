const axios = require("axios");
require("dotenv").config();

exports.swapToken = async (req, res) => {
  try {
    const fromTokenAddress = req.query.fromTokenAddress;
    const toTokenAddress = req.query.toTokenAddress;
    const amount = req.query.amount;
    const fromAddress = req.query.fromAddress;

    //get swap from 1inch api
    const apiUrl = `https://api.1inch.dev/swap/v5.2/1/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}&fromAddress=${fromAddress}`;

    const bearerToken = process.env.INCH_KEY;

    const headers = {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const swap = await axios.get(apiUrl, { headers });

    console.log(swap.data);

    res.status(200).json(swap.data);
  } catch (error) {
    res.status(500).json({ error: `Error:${error}` });
  }
};

exports.approveToken = async (req, res) => {
  try {
    const tokenAddress = req.query.tokenAddress;

    //get approval from 1inch api
    const apiUrl = `https://api.1inch.dev/swap/v5.2/1/approve/transaction?tokenAddress=${tokenAddress}`;

    const bearerToken = process.env.INCH_KEY;

    const headers = {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const approve = await axios.get(apiUrl, { headers });

    console.log(approve.data);

    res.status(200).json(approve.data);
  } catch (error) {
    res.status(500).json({ error: ` Error ${error}` });
  }
};

exports.allowanceToken = async (req, res) => {
  try {
    const tokenAddress = req.query.tokenAddress;
    const walletAddress = req.query.walletAddress;

    //get allowance from 1inch api
    const apiUrl = `https://api.1inch.dev/swap/v5.2/1/approve/allowance?tokenAddress=${tokenAddress}&walletAddress=${walletAddress}`;

    const bearerToken = process.env.INCH_KEY;

    const headers = {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const allowance = await axios.get(apiUrl, { headers });

    res.status(200).json(allowance.data);
  } catch (error) {
    res.status(500).json({ error: `Error ${error}` });
  }
};

exports.quoteToken = async (req, res) => {
  try {
    const src = req.query.src;
    const dst = req.query.dst;
    const amount = req.query.amount;

    //get quote from 1inch api
    const apiUrl = `https://api.1inch.dev/swap/v5.2/1/quote?src=${src}&dst=${dst}&amount=${amount}`;

    const bearerToken = process.env.INCH_KEY;

    const headers = {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const quote = await axios.get(apiUrl, { headers });

    res.status(200).json(quote.data);
  } catch (error) {
    res.status(500).json({ error: ` Error ${error}` });
  }
};
