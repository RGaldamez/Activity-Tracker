const express = require("express");
const db = require("../db/db");
const router = express.Router();

//user- email, role, date
//creating a new user
router.post("/user", async (req, res) => {
  const { email, role } = req.body;
  try {
    const newUser = await db.query(
      `INSERT INTO users(email,user_role) values('${email}','${role}') RETURNING *;`
    );
    res.send(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(400).send({ msg: "Error creating user", error: error.message });
  }
});

module.exports = router;
