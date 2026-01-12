require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const mongo_URI = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose.connect(mongoURI)
.then(() =>console.log("Connected to MongoDB"))
.catch(err => console.error("Connection error:", err));












app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});