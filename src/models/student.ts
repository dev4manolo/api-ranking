import { dbQuery } from "../services/db";

export type Student = {
  id: number;
  name: string;
};

const insertStudent = async (student: Student) => {
  await dbQuery(`INSERT INTO student (name) VALUES(?)`, [student.name]);
  return student;
};

const listStudents = async () => {
  const retorno = await dbQuery(`SELECT * FROM student`);
  return retorno as Student[];
};

export const studentModel = {
  insertStudent,
  listStudents,
};
