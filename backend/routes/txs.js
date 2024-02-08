const express = require("express");
const router = express.Router();
const ethers = require("ethers");
const { alchemy } = require("../config/config");

function convertBigNumber(value) {
    return ethers.BigNumber.from(value).toString();
};

router.get("/:block", async (req, res) => {
    try {
        const blockNumber = req.params.block;
        const data = await alchemy.core.getBlockWithTransactions(parseInt(blockNumber));

        const processedBlockData = data.transactions.map((block) => ({
            hash: block.hash,
            blockNumber: block.blockNumber,
            confirmations: block.confirmations,
            from: block.from,
            to: block.to,
            nonce: block.nonce,
            value: convertBigNumber(block.value._hex),
            gaslimit: convertBigNumber(block.gasLimit._hex),
            gasprice: convertBigNumber(block.gasPrice._hex),
            timestamp: data.timestamp
        }))

        return res.status(200).json(processedBlockData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;