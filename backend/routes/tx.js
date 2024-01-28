const express = require("express");
const router = express.Router();
const alchemy = require("../config/config");

router.get("/:tx", async (req, res) => {
    try {
        const txHash = req.params.tx;
        const response = await alchemy.core.getTransactionReceipt(txHash);

        return res.status(200).json(response);
    } catch (error) {
        console.error(`Error in router handler: ${error}`);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;