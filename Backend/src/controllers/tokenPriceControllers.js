const Moralis = require("moralis").default;

exports.fetchTokenPrice = async (req, res) => {
  try {
    const { query } = req;

    //get token price of 1st address from 1inch api
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
      address: query.addressOne,
    });
    //get token price of 2nd address from 1inch api
    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: query.addressTwo,
    });

    const usdPrices = {
      tokenOne: responseOne.raw.usdPrice,
      tokenTwo: responseTwo.raw.usdPrice,
      ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
    };

    res.status(200).json(usdPrices);
  } catch (error) {
    res.status(500).json({ error: `Error ${error}` });
  }
};
