import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { useRoutes } from "./routes";
dotenv.config();

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());

useRoutes(app);

app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
