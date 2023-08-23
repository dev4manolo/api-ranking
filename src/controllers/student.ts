import { Request, Response } from "express";
import { Student, studentModel } from "../models/student";
import { badRequest, internalServerError } from "../services/util";

const insertStudent = (req: Request, res: Response) => {
  {
    const student = req.body;
    if (!student) return badRequest(res, "Produto inválido");

    if (!student.name) return badRequest(res, "Informe o nome do produto");
  }

  const student = req.body as Student;

  return studentModel
    .insertStudent(student)
    .then((ranks) => {
      res.json(ranks);
    })
    .catch((err) => internalServerError(res, err));
};

const listStudents = ({}: Request, res: Response) => {
  studentModel
    .listStudents()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => internalServerError(res, err));
};

export const studentController = {
  insertStudent,
  listStudents,
};
