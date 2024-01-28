const express = require("express");
const router = express.Router();
const ethers = require("ethers");
const { alchemy } = require("../config/config");
const axios = require("axios");


router.get("/:block", async (req, res) => {
    try {
        const blockNumber = req.params.block;
        const data = await alchemy.core.getBlockWithTransactions(parseInt(blockNumber));
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

// Error handler middleware
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = router;