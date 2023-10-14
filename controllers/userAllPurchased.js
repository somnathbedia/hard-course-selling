const User = require("../models/User")

exports.userAllPurchased = async(req, res) => {
    const user = await User.findOne({ username: req.user.user }).populate('purchasedCourses');
    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
}