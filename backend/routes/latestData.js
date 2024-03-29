const express = require("express");
const axios = require("axios");
const router = express.Router();
const { alchemy } = require("../config/config");


function timeAgo(timestamp) {
    const secondsAgo = Math.floor((Date.now() - timestamp * 1000) / 1000);
    if (secondsAgo <= 60) {
        return `${secondsAgo} secs`;
    } else if (secondsAgo <= 3600) {
        return `${Math.floor(secondsAgo / 60)} min`;
    } else {
        return `${Math.floor(secondsAgo / 3600)} hours`;
    }
}

async function fetchMarketData() {
    try {

        const apiKey = process.env.MOBULA_API_KEY;
        const response = await axios.get("https://api.mobula.io/api/1/market/data?asset=Ethereum&blockchain=Ethereum&symbol=ETH", {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            }
        })

        return response.data;
    } catch (err) {
        console.error(`Error in getMarketData: ${err}`);
        return { error: "Failed to fetch ETH Market Data" };
    }
}


const fetchLatestBlockData = async () => {
    try {
        const latestBlock = await alchemy.core.getBlockNumber();

        const blockPromise = [];

        for (let i = 0; i < 6; i++) {
            blockPromise.push(alchemy.core.getBlock(latestBlock - i));
        }

        const latestBlockData = await Promise.all(blockPromise);

        const processedBlockData = latestBlockData.map(
            ({ miner, number, timestamp, transactions }) => ({
                miner,
                number,
                timestamp,
                transactions,
                agoTimeStamp: timeAgo(timestamp),
            })
        );

        return processedBlockData;
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

const fetchLatestTransactionData = async () => {
    try {
        const latestBlock = await alchemy.core.getBlockNumber();
        const { transactions, timestamp } = await alchemy.core.getBlock(
            latestBlock
        );

        const transactionPromises = [];

        for (let i = 0; i < 6; i++) {
            transactionPromises.push(
                alchemy.core.getTransactionReceipt(transactions[i])
            );
        }

        const latestTransaction = await Promise.all(transactionPromises);

        const processedTransactionData = latestTransaction.map(
            ({ blockNumber, from, to, transactionHash }) => ({
                blockNumber,
                to,
                from,
                transactionHash,
                ageTimeStamp: timeAgo(timestamp),
            })
        );
        return processedTransactionData;
    } catch (err) {
        console.error("Error Fetching TransactionData:", err);
    }
};

router.get("/", async (req, res) => {
    try {
        const marketData = await fetchMarketData();
        const latestBlock = await fetchLatestBlockData();
        const latestBlockTransaction = await fetchLatestTransactionData();


        res.json({ marketData, latestBlock, latestBlockTransaction }); // Send an object with properties
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
