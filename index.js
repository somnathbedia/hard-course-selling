const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminroutes = require("./routes/admin")

mongoose.connect("mongodb+srv://somnathswd:Ik4v7BuePt8uPm4n@cluster0.z10zgei.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(bodyParser.json());

app.use("/admin", adminroutes);

app.listen(8000, () => {
    console.log("server is running.....");
})