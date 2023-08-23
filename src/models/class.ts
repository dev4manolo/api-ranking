import { prisma } from "../prisma/client";

export type Class = {
  id: number;
  name: string;
};

const insertClass = async (classes: Class) => {
  const classs = await prisma.class.create({
    data: {
      name: classes.name,
    },
  });
  return classs;
};

const listClasses = async () => {
  const data = await prisma.class.findMany();
  return data;
};

export const classModel = {
  insertClass,
  listClasses,
};
