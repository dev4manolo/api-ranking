import { Router } from "express";
import { classController } from "../controllers/class";

const classRouter = Router();
classRouter.get("/", classController.listClass);
classRouter.post("/", classController.insertClass);

export { classRouter };
