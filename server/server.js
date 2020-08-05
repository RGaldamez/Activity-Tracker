require("dotenv").config();
const db = require("./db/db");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// db.authenticate()
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((error) => {
//     console.error("Connection to database failed", error.message);
//   });
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Backend Server is running");
});

app.post("/activity", async (req, res) => {
  try {
    const { title } = req.body;
    console.log(title);
    const newTitle = await db.query(
      `INSERT INTO table1(title)
      VALUES ('${title}');`
    );
    res.send(newTitle);
  } catch (error) {
    console.error(error.message);
  }
});
