const express = require("express");
const router = express.Router();
const handleSignup = require("../controllers/adminSignup")
const handleSignin = require("../controllers/adminSignin")
const handleCourseCreation = require("../controllers/createCourse")
const authentication = require("../authentication/Authentication");
const handleUpadte = require("../controllers/updateCourse");
const getCourse = require("../controllers/gettingCourse");


router.post("/signup", handleSignup.adminSignup);
router.post("/signin", handleSignin.adminSignin);
router.post("/createcourse",authentication.authenticateAdmin, handleCourseCreation.createCourse);
router.put("/courses/:courseId", authentication.authenticateAdmin, handleUpadte.updateCourse)
router.get("/courses", authentication.authenticateAdmin, getCourse.courses);

module.exports = router;