const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const secret = require("./adminSignup");


exports.adminSignin = async (req, res) => {
    const { username, password } = req.headers;
    const admin = await User.findOne({ username, password });
    console.log(admin);
    if (admin) {
        
        const token = jwt.sign({ username }, secret.secret, { expiresIn: "1h" });
        res.json({ msg: "Admin logged in", token });
    } else {
        res.status(404).json({ msg: "invalid username or password" });

    }
}