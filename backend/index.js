import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/login", (req, res) => {
  res.send([
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
    {
      name: "Aminat",
      user: true,
      age: 23,
      address: "Sabo",
    },
  ]);
});

app.listen(process.env.PORT, () =>
  console.log(`server running on ${process.env.PORT}`)
);
