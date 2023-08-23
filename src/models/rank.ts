import { dbQuery } from "../services/db";

export type Rank = {
  id: number;
  name: string;
  score: number;
};

export type requestRank = {
  student_id: number;
  class_id: string;
  score: number;
};

const insertRank = async (rank: requestRank) => {
  await dbQuery(
    `INSERT INTO ranking (student_id, class_id, score) VALUES(?, ?, ?)`,
    [rank.student_id, rank.class_id, rank.score]
  );
  return rank;
};

const listRank = async () => {
  const retorno = await dbQuery(`
    SELECT
        student.id,
        student.name,
        SUM(ranking.score) AS score
    FROM ranking
    JOIN student ON ranking.student_id = student.id
    GROUP BY student.id
    ORDER BY score DESC
`);
  return retorno as Rank[];
};

export const rankModel = {
  listRank,
  insertRank,
};