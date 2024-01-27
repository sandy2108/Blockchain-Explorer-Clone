const express = require("express");
const router = express.Router();



async function gettokenBalances({ address }) {
    try {
        if (!address) {
            return { error: "Address Parameter is Missing" };
        }

        const apiKey = process.env.MOBULA_API_KEY;
        const response = await fetch(`https://api.mobula.io/api/1/wallet/portfolio?wallet=${address}&blockchains=1%2CEthereum`, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();

        if (result && result.data && result.data.assets) {
            const ethereumAssets = result.data.assets.filter(item => item.asset.name === "Ethereum");
            const remainingAssets = result.data.assets.filter(item => item.asset.name !== "Ethereum" && item.token_balance > 0);

            result.data.ethereumAssets = ethereumAssets;
            result.data.assets = remainingAssets;
        }

        return result;
    } catch (err) {
        console.error(`Error in gettokenBalances: ${err}`);
        return { error: err.message };
    }
}




async function getTransaction({ address, transactiontype }) {
    try {
        const apiKey = process.env.ETHERSCAN_API_KEY;
        const apiUrl = `https://api.etherscan.io/api`;
        const response = await fetch(`${apiUrl}?module=account&action=${transactiontype}&address=${address}&page=1&offset=25&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error("Error in getNormalTransaction:", err);
        return { error: err.message };
    }
}

router.get("/:address", async (req, res) => {
    try {
        const address = req.params.address;

        const [
            normalTransaction,
            internalTransaction,
            erc20Transaction,
            erc721Transaction,
            erc1155Transaction,


        ] = await Promise.all([
            getTransaction({ address, transactiontype: "txlist" }),
            getTransaction({ address, transactiontype: "txlistinternal" }),
            getTransaction({ address, transactiontype: "tokentx" }),
            getTransaction({ address, transactiontype: "tokennfttx" }),
            getTransaction({ address, transactiontype: "token1155tx" }),


        ]);


        const tokenBalance = await gettokenBalances({ address });


        return res.json({
            normalTransaction,
            internalTransaction,
            erc20Transaction,
            erc721Transaction,
            erc1155Transaction,
            tokenBalance,

        });
    } catch (error) {
        console.error(`Error in router handler: ${error}`);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;