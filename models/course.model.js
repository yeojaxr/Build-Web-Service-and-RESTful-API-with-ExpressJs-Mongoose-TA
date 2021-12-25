const mongoose = require("mongoose");

const opts = {
    timestamps: true,
};

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        instructor: {
            type: mongoose.Schema.ObjectId,
        },
        scheduleDateTime: {
            type: Date,
        },
    },
    opts
);

const CourseSchema = mongoose.model("Course", courseSchema);

module.exports = CourseSchema;