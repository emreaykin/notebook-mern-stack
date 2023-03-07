const express = require("express");
const app = express();
const notRoute = require("./routers/notlar");
require("dotenv").config();
const port = process.env.PORT || 4000;

const mongoose = require("mongoose");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("veritabanı bağlandı");
    app.listen(port, () => {
      console.log(`Server Running http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/notlar", notRoute);
