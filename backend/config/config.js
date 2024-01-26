

const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

// Alchemy Configuration
const alchemyConfig = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(alchemyConfig);


module.exports = {
    alchemy,
}