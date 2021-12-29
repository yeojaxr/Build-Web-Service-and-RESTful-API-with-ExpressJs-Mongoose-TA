const mongoose = require("mongoose");

const opts = {
    timestamps: true,
};

const participantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        email: {
            type: String,
            maxlength: 50,
        },
        phone: {
            type: String,
            maxlength: 13,
        },
        courses: [mongoose.Schema.ObjectId],
    },
    opts
);

const ParticipantSchema = mongoose.model("Participant", participantSchema);

module.exports = ParticipantSchema;