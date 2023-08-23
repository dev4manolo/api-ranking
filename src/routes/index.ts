import Router, { Application } from 'express';
import { classRouter } from "./class";
import { rankRouter } from "./rank";
import { studentRouter } from "./student";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();

  apiRouter.use("/rank", rankRouter);
  apiRouter.use("/students", studentRouter);
  apiRouter.use("/class", classRouter);

  app.use("/api/v1", apiRouter);
};


