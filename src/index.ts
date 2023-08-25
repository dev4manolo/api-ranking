import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { useRoutes } from "./routes";
import swaggerDocument from "./swagger.json";

dotenv.config();

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/swagger", (_, response) => {
  return response.sendFile(process.cwd() + "/src/swagger.json");
});

app.get("/docs", (_, response) => {
  return response.sendFile(process.cwd() + "/src/index.html");
});

useRoutes(app);

app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
