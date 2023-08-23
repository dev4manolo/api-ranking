import { Router } from 'express';
import { rankController } from '../controllers/rank';

const rankRouter = Router();
rankRouter.get("/", rankController.listRank);
rankRouter.post("/", rankController.insertRank);

export { rankRouter };

