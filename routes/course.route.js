const express = require("express");

const CourseController = require("../controllers/course.controller");

const router = express.Router();

router.post("/course", CourseController.createNewCourse);
router.get("/course", CourseController.getAllCourse);
router.get("/course/:id", CourseController.getCourseByID);
router.patch("/course/:id", CourseController.updateCourse);
router.delete("/course/:id", CourseController.deleteCourse);

module.exports = router;
