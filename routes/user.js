const express = require("express");
const router = express.Router();
const userSignup = require("../controllers/userSignup")
const userSignin = require("../controllers/userSignin")
const userCourses = require("../controllers/userCourses")
const authenticateJwt = require("../authentication/Authentication")
const purchased = require("../controllers/userPurchased")
const allPurchased = require("../controllers/userAllPurchased")

router.post("/signup", userSignup.userSignup);
router.post("/signin", userSignin.signin)
router.get("/courses", authenticateJwt.authenticateAdmin, userCourses.userCourses)
router.post("/courses/:courseId", authenticateJwt.authenticateAdmin, purchased.userPurchased);
router.get("/purchasedcourses", authenticateJwt.authenticateAdmin, allPurchased.userAllPurchased);



module.exports = router;