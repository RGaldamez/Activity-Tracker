const express = require("express");
const db = require("../db/db");
const router = express.Router();
//user- email, role, date
router.post("/user", async (req, res) => {
  const { email, role } = req.body;
  try {
    const newUser = await db.query(
      `INSERT INTO users(email,user_role) values('${email}','${role}') RETURNING *;`
    );
    res.send(newUser);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
