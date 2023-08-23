import { Request, Response } from 'express';
import { Rank, rankModel } from "../models/rank";
import { badRequest, internalServerError } from "../services/util";

const insertRank = (req: Request, res: Response) => {
  {
    const rank = req.body;
    if (!rank) return badRequest(res, "Produto inválido");

    if (!rank.student_id) return badRequest(res, "Informe o id do estudante");

    if (!rank.class_id) return badRequest(res, "Informe o id da turma");
  }

  const classes = req.body as Rank;

  return rankModel
    .insertRank(classes)
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

export const rankController = {
  insertRank,
  listRank,
};

