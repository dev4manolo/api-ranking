import { Router } from 'express';
import { rankController } from '../controllers/rank';

const rankRouter = Router();
rankRouter.get("/", rankController.listRank);
rankRouter.get("/course/:id", rankController.viewRankByClasses);
rankRouter.post("/", rankController.insertRank);

export { rankRouter };

