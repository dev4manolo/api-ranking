import { prisma } from "../prisma/client";

export type Rank = {
  id: string;
  name: string;
  score: string;
};

export type requestRank = {
  student_id: number;
  class_id: number;
  score: string;
};

const insertRank = async (rank: requestRank) => {
  const ranking = await prisma.ranking.create({
    data: {
      student_id: rank.student_id,
      class_id: rank.class_id,
      score: rank.score,
    },
  });

  return ranking;
};

const listRank = async () => {
  const data: any = await prisma.$queryRaw`
    SELECT
        student.id,
        student.name,
        SUM(ranking.score) AS score
    FROM ranking
    JOIN student ON ranking.student_id = student.id
    GROUP BY student.id
    ORDER BY score DESC, student.name ASC
`;
  const d = data.map((d: any) => {
    return {
      id: d.id,
      name: d.name,
      score: d.score.toString(),
    };
  });
  return d;
};

export const rankModel = {
  listRank,
  insertRank,
};
