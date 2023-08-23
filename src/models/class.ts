import { dbQuery } from "../services/db";

export type Class = {
  id: number;
  name: string;
};

const insertClass = async (classes: Class) => {
  await dbQuery(`INSERT INTO class (name) VALUES(?)`, [classes.name]);
  return classes;
};

const listClasses = async () => {
  const retorno = await dbQuery(`SELECT * FROM class`);
  return retorno as Class[];
};

export const classModel = {
  insertClass,
  listClasses,
};
