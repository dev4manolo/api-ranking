import { Request, Response } from 'express';
import { rankModel, requestRank } from "../models/rank";
import { badRequest, internalServerError } from "../services/util";

const insertRank = (req: Request, res: Response) => {
  {
    const rank = req.body;

    if (!rank.student_id) return badRequest(res, "Informe o id do estudante");

    if (!rank.class_id) return badRequest(res, "Informe o id da turma");
  }

  const rank = req.body as requestRank;

  return rankModel
    .insertRank(rank)
    .then((ranks) => {
      res.json(ranks);
    })
    .catch((err) => internalServerError(res, err));
};

const listRank = ({}: Request, res: Response) => {
  rankModel
    .listRank()
    .then((ranks) => {
      res.json(ranks);
    })
    .catch((err) => internalServerError(res, err));
};

const viewRankByClasses = (req: Request, res: Response) => {
  const { id } = req.params;

  return rankModel
    .viewRankByClasses(Number(id))
    .then((ranks) => {
      res.json(ranks);
    })
    .catch((err) => internalServerError(res, err));
};

export const rankController = {
  insertRank,
  listRank,
  viewRankByClasses,
};

