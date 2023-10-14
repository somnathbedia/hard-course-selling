const Course = require("../models/Course");


exports.courses = async(req,res) => {
    const course = await Course.find({});

    if (course) {
        res.json({ course });
    } else {
        res.json({ msg: "Not found" });
    }
}