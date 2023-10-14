const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
})

module.exports = mongoose.model("User", userSchema);