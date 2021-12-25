const mongoose = require("mongoose");

const opts = {
  timestamps: true,
};

const instructorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    location: {
      type: String,
    },
  },
  opts
);

const InstructorsSchema = mongoose.model("Instructor", instructorsSchema);

module.exports = InstructorsSchema;
