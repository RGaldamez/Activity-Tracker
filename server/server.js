require("dotenv").config();
const db = require("./db/db");
const express = require("express");
const userRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const focusRoutes = require("./routes/focus");
const activitiesRoutes = require("./routes/activities");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);
app.use(focusRoutes);
app.use(categoriesRoutes);
app.use(activitiesRoutes);

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
  res.send("Backend Server is running");
});
