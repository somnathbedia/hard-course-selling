const Course = require("../models/Course")
const User = require("../models/User");

exports.userPurchased = async (req, res) => {
    const courseId = req.params.courseId;
    console.log(courseId);
    const course = await Course.findById( courseId );
    if (course) {
        const user = await User.findOne({ username: req.user.user });
        if (user) {
          user.purchasedCourses.push(course);
          await user.save();
          res.json({ message: 'Course purchased successfully' });
        } else {
          res.status(403).json({ message: 'User not found' });
        }
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
}