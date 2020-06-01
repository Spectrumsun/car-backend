import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from 'cors';
import "dotenv/config";
import routes from "./routes";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.use("/api/v1/", routes);
app.listen(port);

console.log(`Find me on http://localhost:${port}`);

export default app;
