const Course = require("../models/Course")

exports.userCourses = async(req, res) => {
    const courses = await Course.find({ published: true });
    res.json({ courses });
}