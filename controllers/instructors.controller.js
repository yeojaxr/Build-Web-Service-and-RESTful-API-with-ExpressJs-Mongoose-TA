const InstructorsModel = require("../models/instructors.model");

class InstructorsController {
  static async createNewInstructors(req, res) {
    try {
      const body = req.body;

      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;

      const instructors = new InstructorsModel({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });

      const saved = await instructors.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllInstructors(req, res) {
    try {
      const instructorsList = await InstructorsModel.find();
      res.status(200).send(instructorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getInstructorsByID(req, res) {
    try {
      const id = req.params.id;

      const instructorsList = await InstructorsModel.findOne({
        _id: id,
      });
      res.status(200).send(instructorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateInstructors(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;

      const instructorsList = await InstructorsModel.updateOne(
        { _id: id },
        {
          name: name,
          dateOfBirth: dateOfBirth,
          location: location,
        }
      );
      res.status(200).send(body);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteInstructors(req, res) {
    try {
      const id = req.params.id;
      await InstructorsModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = InstructorsController;
