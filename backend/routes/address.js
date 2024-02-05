const express = require("express");
const axios = require("axios");
const router = express.Router();

async function gettokenBalances({ address }) {
    try {
        if (!address) {
            return { error: "Address Parameter is Missing" };
        }

        const apiKey = process.env.MOBULA_API_KEY;
        const response = await axios.get(`https://api.mobula.io/api/1/wallet/portfolio?wallet=${address}&blockchains=1%2CEthereum`, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
        });

        if (response && response.data && response.data.assets) {
            const ethereumAssets = response.data.assets.filter(item => item.asset.name === "Ethereum");
            const remainingAssets = response.data.assets.filter(item => item.asset.name !== "Ethereum" && item.token_balance > 0);

            response.data.ethereumAssets = ethereumAssets;
            response.data.assets = remainingAssets;
        }

        return response.data;
    } catch (err) {
        console.error(`Error in gettokenBalances: ${err}`);
        return { error: "Failed to fetch token balances" };
    }
}

async function getTransaction({ address, transactiontype }) {
    try {
        const apiKey = process.env.ETHERSCAN_API_KEY;
        const apiUrl = `https://api.etherscan.io/api`;
        const { data } = await axios.get(`${apiUrl}?module=account&action=${transactiontype}&address=${address}&page=1&offset=25&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`);

        if (data.status === "1") {
            return data.result;
        } else {
            return { error: data.message || "Failed to fetch transactions" };
        }
    } catch (err) {
        console.error("Error in getTransaction:", err);
        return { error: "Failed to fetch transactions" };
    }
}


router.get("/:address", async (req, res) => {
    try {
        const address = req.params.address;

        const transactions = await Promise.all([
            getTransaction({ address, transactiontype: "txlist" }),
            getTransaction({ address, transactiontype: "txlistinternal" }),
            getTransaction({ address, transactiontype: "tokentx" }),
            getTransaction({ address, transactiontype: "tokennfttx" }),
            getTransaction({ address, transactiontype: "token1155tx" }),
        ]);

        const tokenBalance = await gettokenBalances({ address });

        return res.json({
            transactions: {
                normal: transactions[0],
                internal: transactions[1],
                erc20: transactions[2],
                erc721: transactions[3],
                erc1155: transactions[4],
            },
            tokenBalance,
        });
    } catch (error) {
        console.error(`Error in router handler: ${error}`);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});


module.exports = router;