import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const server = express();

server.get("/", (request: Request, response: Response) => {
  response.send("<h1>Welcome to Edo's first docker!</h1>");
});

server.get("/api/edocker", (request: Request, response: Response) => {
  response.json(kittens);
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${process.env.PORT}`)
);

const kittens = [
  { id: 1, name: "Mitsi", age: 4 },
  { id: 2, name: "Kitsi", age: 5 },
  { id: 3, name: "Cyber", age: 8 },
  { id: 4, name: "Megatron", age: 1 },
];
