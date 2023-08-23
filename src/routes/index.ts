import Router, { Application } from 'express';
import { rankRouter } from "./rank";

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    
    apiRouter.use("/rank", rankRouter);

    app.use('/api/v1', apiRouter);
}


