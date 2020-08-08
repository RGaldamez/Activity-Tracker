require("dotenv").config();
const db = require("./db/db");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const focusRoutes = require("./routes/focus");
const activitiesRoutes = require("./routes/activities");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(userRoutes);
app.use(focusRoutes);
app.use(categoriesRoutes);
app.use(activitiesRoutes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

db.query("SELECT NOW()", (err, res) => {
  if (!err) {
    const { rows } = res;
    const { now } = rows[0];

    console.log(`Connected to DB at ${now} `);
  } else {
    console.log("Connection to DB failed", err);
  }
});

app.get("/", (req, res) => {
  res.send({ msg: "Backend Server is running" });
});
