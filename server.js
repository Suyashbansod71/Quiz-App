const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", require("./routes/userRoutes"));
const PORT = process.env.PORT || 5100

app.use(cors());

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
