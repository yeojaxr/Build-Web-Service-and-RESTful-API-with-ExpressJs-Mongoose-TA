const mongoose = require("mongoose");

const opts = {
  timestamps: true,
};

const instructorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
    },
  },
  opts
);

const InstructorsSchema = mongoose.model("Instructor", instructorsSchema);

module.exports = InstructorsSchema;
