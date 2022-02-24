import express from "express";
import StudentController from "../controllers/StudentController.js";
const router = express.Router();

router.get("/student", StudentController.getAllDoc);

export default router;
