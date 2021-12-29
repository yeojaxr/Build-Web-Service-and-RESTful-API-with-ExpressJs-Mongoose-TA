const ParticipantsModel = require("../models/participant.model");

class ParticipantsController {
  static async createNewParticipants(req, res) {
    try {
      const body = req.body;

      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const email = body.email;
      const phone = body.phone;
      const courses = body.courses;

      const participants = new ParticipantsModel({
        name: name,
        dateOfBirth: dateOfBirth,
        email: email,
        phone: phone,
        courses: courses,
      });

      const saved = await participants.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllParticipants(req, res) {
    try {
      const participantsList = await ParticipantsModel.find();
      res.status(200).send(participantsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getParticipantsByID(req, res) {
    try {
      const id = req.params.id;

      const participantsList = await ParticipantsModel.findOne({
        _id: id,
      });
      res.status(200).send(participantsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateParticipants(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const email = body.email;
      const phone = body.phone;
      const courses = body.courses;

      const participantsList = await ParticipantsModel.updateOne(
        { _id: id },
        {
          name: name,
          dateOfBirth: dateOfBirth,
          email: email,
          phone: phone,
          courses: courses,
        }
      );
      res.status(200).send(body);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteParticipants(req, res) {
    try {
      const id = req.params.id;
      await ParticipantsModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = ParticipantsController;
