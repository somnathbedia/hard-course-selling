const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
    const { title, description, price, imageLink, published } = req.body;
    
    const newCourse = new Course({ title, description, price, imageLink, published });
    await newCourse.save();
    res.status(200).json({ msg: "course created",newCourse });
};
