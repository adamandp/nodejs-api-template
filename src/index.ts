import express, { Application } from "express";
import { routes } from "./routes";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
import cors from 'cors'
// import { connectDB } from "./utils/connectDB";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors())
// connectDB();

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
