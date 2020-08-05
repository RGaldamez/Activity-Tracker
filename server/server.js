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

db.query("SELECT NOW()", (err, res) => {
  const { rows } = res;
  const { now } = rows[0];

  console.log(`Connected to DB at ${now} `);
});

app.get("/", (req, res) => {
  res.send("Backend Server is running");
});

// app.post("/user", async (req, res) => {
//   try {
//     const { email, role } = req.body;
//     // console.log(email, role);
//     const newUser = await db.query(
//       `INSERT INTO users(email, role)
//       VALUES ('${email}','${role}') RETURNING *;`
//     );
//     res.send(newUser);
//   } catch (error) {
//     console.error(error.message);
//   }
// });
