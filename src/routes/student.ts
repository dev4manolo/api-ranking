import { Router } from "express";
import { studentController } from "../controllers/student";

const studentRouter = Router();
studentRouter.get("/", studentController.listStudents);
studentRouter.post("/", studentController.insertStudent);

export { studentRouter };
