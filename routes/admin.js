const express = require("express");
const router = express.Router();
const handleSignup = require("../controllers/adminSignup")
const handleSignin = require("../controllers/adminSignin")

router.post("/signup", handleSignup.adminSignup);
router.post("/signin", handleSignin.adminSignin);


module.exports = router;