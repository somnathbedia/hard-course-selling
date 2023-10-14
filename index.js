const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminroutes = require("./routes/admin")
require('dotenv').config();

mongoose.connect(process.env.DATA_BASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(bodyParser.json());

app.use("/admin", adminroutes);

app.listen(8000, () => {
    console.log("server is running.....");
})