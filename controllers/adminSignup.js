const  Admin  = require("../models/Admin");
const jwt = require("jsonwebtoken");
// exports.secret = "wkeufgwakejgh";
exports.adminSignup = (req, res) => {
    const { username, password } = req.body;
    Admin.findOne({ username }).then( async(admin) => {
        if (admin) {
            res.status(411).json({ msg: "Admin already exist" });
        }else {
            const newAdmin = new Admin({ username, password });
            await newAdmin.save();
            
            const token = jwt.sign({ username, role: "Admin" }, secret, { expiresIn: "1h" });
            res.status(201).json({ msg: "Admin signup successfully!", token });
        }
    });

}