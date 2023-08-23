import { Request, Response } from "express";
import { Class, classModel } from "../models/class";
import { badRequest, internalServerError } from "../services/util";

const insertClass = (req: Request, res: Response) => {
  {
    const isClass = req.body;
    if (!isClass) return badRequest(res, "Produto inválido");

    if (!isClass.name) return badRequest(res, "Informe o nome do produto");
  }

  const classes = req.body as Class;

  return classModel
    .insertClass(classes)
    .then((classes) => {
      res.json(classes);
    })
    .catch((err) => internalServerError(res, err));
};

const listClass = ({}: Request, res: Response) => {
  classModel
    .listClasses()
    .then((classes) => {
      res.json(classes);
    })
    .catch((err) => internalServerError(res, err));
};

export const classController = {
  insertClass,
  listClass,
};
