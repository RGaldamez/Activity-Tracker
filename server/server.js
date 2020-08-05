require("dotenv").config();
const db = require("./db/db");
const express = require("express");
const userRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const focusRoutes = require("./routes/focus");
const activitiesRoutes = require("./routes/activities");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(userRoutes);
app.use(focusRoutes);
app.use(categoriesRoutes);
app.use(activitiesRoutes);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Backend Server is running");
});
