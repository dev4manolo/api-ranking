import { dbQuery } from "../services/db";

export type Rank = {
    id: number;
    name: string;
    pontuacao: number;
}


const rankScore = async () => {
    const retorno = await dbQuery(`
    SELECT
        student.id,
        student.name,
        SUM(ranking.pontuacao) AS score
    FROM ranking
    JOIN student ON ranking.student_id = student.id
    GROUP BY student.id
    ORDER BY score DESC
`);
  return retorno as Rank[];
};



export const rankModel = {
  rankScore,
};