const Course = require("../models/Course")

exports.updateCourse = async(req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      res.json({ message: 'Course updated successfully' , course});
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
}