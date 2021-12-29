const mongoose = require("mongoose");

const opts = {
    timestamps: true,
};

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50,
        },
        description: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 500,
        },
        instructor: {
            type: mongoose.Schema.ObjectId,
            required: true,
        },
        scheduleDateTime: {
            type: Date,
            required: true,
        },
    },
    opts
);

const CourseSchema = mongoose.model("Course", courseSchema);

module.exports = CourseSchema;