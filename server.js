/** @format */

import express from "express";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
console.log(process.env.NODE_ENV);
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

// if (process.env.NODE_ENV == "development") {
app.use(morgan("dev"));
// }
