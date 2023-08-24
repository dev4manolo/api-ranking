import { prisma } from "../prisma/client";

export type Rank = {
  id: string;
  name: string;
  score: number;
};

export type requestRank = {
  student_id: number;
  class_id: number;
  score: number;
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
    select 
      s.id,
      s."name",
      sum(r.score) as score
    FROM "Ranking" r
    JOIN "Student" s on r.student_id = s.id
    group by s.id 
    order by score desc 
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
