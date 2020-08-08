const express = require("express");
const db = require("../db/db");
const router = express.Router();

//creating daily focus entry
//category_id, total_time (hours), user_id
router.post("/focus", async (req, res) => {
  const { category_id, total_time, user_id } = req.body;
  try {
    const newFocus = await db.query(
      `INSERT INTO focus(category_id,total_time,user_id) values(${category_id},${total_time},${user_id}) RETURNING *`
    );
    res.send(newFocus);
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .send({ msg: "Error creating focus entry", error: error.message });
  }
});

//deleting a focus
router.delete("/focus", async (req, res) => {
  const { id } = req.body;

  try {
    const deletedFocus = await db.query(
      `DELETE FROM focus WHERE category_id=${id} RETURNING *`
    );
    res.send({ msg: "Focus entry has been deleted. ", object: deletedFocus });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .send({ msg: "Error deleting focus entry", error: error.message });
  }
});

// getting all focus entries for a defined date
router.get("/focus", async (req, res) => {
  const { date } = req.body;
  try {
    const dayFocus = await db.query(
      `SELECT * FROM focus WHERE date = '${date}' `
    );
    res.send(dayFocus);
  } catch (error) {
    res
      .status(400)
      .send({
        msg: "Error getting all focus for a single day, ",
        error: error.message,
      });
  }
});

module.exports = router;
