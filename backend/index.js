const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());

// Allow requests only from the specific frontend URL
const corsOptions = {
    origin: 'https://blockchain-explorer-clone-dgb7.vercel.app',
    methods: 'GET',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Routes
app.use("/", require("./routes/latestData"));
app.use("/address", cors(corsOptions), require("./routes/address"));
app.use("/tx", require("./routes/tx"));
app.use("/block", require("./routes/block"));
app.use("/txs/", require("./routes/txs"));

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
