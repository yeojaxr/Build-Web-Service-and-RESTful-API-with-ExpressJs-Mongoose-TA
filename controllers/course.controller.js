const CourseModel = require("../models/course.model");

class CourseController {
  static async createNewCourse(req, res) {
    try {
      const body = req.body;

      const title = body.title;
      const description = body.description;
      const instructor = body.instructor;
      const scheduleDateTime = body.scheduleDateTime;

      const course = new CourseModel({
        title: title,
        description: description,
        instructor: instructor,
        scheduleDateTime: scheduleDateTime,
      });

      const saved = await course.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllCourse(req, res) {
    try {
      const CourseList = await CourseModel.find();
      res.status(200).send(courseList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getCourseByID(req, res) {
    try {
      const id = req.params.id;

      const courseList = await CourseModel.findOne({
        _id: id,
        
      });
      res.status(200).send(courseList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateCourse(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const title = body.title;
      const description = body.description;
      const instructor = body.instructor;
      const scheduleDateTime = body.scheduleDateTime;

      const courseList = await CourseModel.updateOne(
        { _id: id },
        {
          title: title,
          description: description,
          instructor: instructor,
          scheduleDateTime: scheduleDateTime,
        }
      );
      res.status(200).send(body);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteCourse(req, res) {
    try {
      const id = req.params.id;
      await CourseModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = CourseController;
