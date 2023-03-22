require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

const fileUpload = require("express-fileupload");
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const { saveFile, saveFiles } = require("./utils/gallery");

app.use(express.json());
//app.use(fileUpload);
app.use(
  fileUpload({
    debug: false,
  })
);

const divisionRoute = require("./routes/division");
const famousPlaceRoute = require("./routes/famousPlace");
const hotelRoute = require("./routes/hotel");

app.use("/division", divisionRoute);
app.use("/famousplace", famousPlaceRoute);
app.use("/hotel", hotelRoute);

app.post("/gallery", saveFile, (req, res, next) => {
  res.status(200).json({ msg: "file upload", filename: req.body.image });
});

app.get("/", (req, res) => {
  console.log("we are here at / route");
});

app.get("*", (req, res) => {
  res.json({ msg: "No found Route" });
});

app.use((err, req, res, next) => {
  err.status = err.status || 200;
  res.status(err.status).json({
    con: false,
    msg: err.message,
  });
});

app.listen(
  process.env.PORT,
  console.log(`server is running port ${process.env.PORT}`)
);
