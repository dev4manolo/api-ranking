import { prisma } from "../prisma/client";

export type Student = {
  id: number;
  name: string;
};

const insertStudent = async (student: Student) => {
  const studentAlreadyExists = await prisma.student.findFirst({
    where: {
      name: student.name,
    },
  });

  if (studentAlreadyExists) throw new Error("Aluno já cadastrado");

  const stdent = await prisma.student.create({
    data: {
      name: student.name,
    },
  });

  return stdent;
};

const listStudents = async () => {
  const data = await prisma.student.findMany();
  return data;
};

export const studentModel = {
  insertStudent,
  listStudents,
};
