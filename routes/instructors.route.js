const express = require("express");

const InstructorsController = require("../controllers/instructors.controller");

const router = express.Router();

router.post("/instructor", InstructorsController.createNewInstructors);
router.get("/instructor", InstructorsController.getAllInstructors);
router.get("/instructor/:id", InstructorsController.getInstructorsByID);
router.patch("/instructor/:id", InstructorsController.updateInstructors);
router.delete("/instructor/:id", InstructorsController.deleteInstructors);

module.exports = router;
