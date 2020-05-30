import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  return res.send("Server is working on TypeScript");
});

app.listen(3000, () => {
  console.log("Server works on 3000 ....");
});
