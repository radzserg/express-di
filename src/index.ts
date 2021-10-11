import express from 'express';
import configureDI from "./config/di";
import configureRouter from "./config/router";

const app = express();
const PORT = 8000;

const diContainer = configureDI();

configureRouter(app, diContainer)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});