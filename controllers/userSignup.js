const jwt = require("jsonwebtoken");
const User = require("../models/User")
require('dotenv').config();

exports.userSignup = async(req, res) => {
    const { username, password,purchasedCourse } = req.body;

    const user = await User.findOne({ username });
    console.log(user);
    if (user) {
        res.status(411).json({ msg: "User already exist" });
    } else {
        const newUser = new User({ username, password, purchasedCourse });
        await newUser.save();
        const token = jwt.sign({ username, role: 'user' }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: 'User created successfully', token });
    }
}