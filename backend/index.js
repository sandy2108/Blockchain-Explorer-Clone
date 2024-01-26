const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());

// Allow requests only from the specific frontend URL
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Routes
app.use("/", require("./routes/latestData"));


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
