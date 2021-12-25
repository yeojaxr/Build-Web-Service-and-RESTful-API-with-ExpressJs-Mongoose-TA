const mongoose = require("mongoose");

const opts = {
    timestamps: true,
};

const participantSchema = new mongoose.Schema(
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

const ParticipantSchema = mongoose.model("Participant", participantSchema);

module.exports = ParticipantSchema;