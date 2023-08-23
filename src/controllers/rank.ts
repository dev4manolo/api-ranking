import { Request, Response } from 'express';
import { rankModel } from '../models/rank';
import { internalServerError } from '../services/util';

const ranking = ({}: Request, res: Response) => {
  rankModel
    .rankScore()
    .then((ranks) => {
      res.json(ranks);
    })
    .catch((err) => internalServerError(res, err));
};

export const rankController = {
  ranking,
};

