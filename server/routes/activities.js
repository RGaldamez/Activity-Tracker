const express = require("express");
const db = require("../db/db");
const router = express.Router();

//creating a new activity
//-activity_name,  user_id, category_id
router.post("/activity", async (req, res) => {
  const { activity_name, user_id, category_id, time_hours } = req.body;
  try {
    const newActivity = await db.query(
      `INSERT INTO activities(activity_name, user_id,category_id,time_hours) values('${activity_name}', ${user_id},${category_id},${time_hours}) RETURNING *`
    );
    res.send(newActivity);
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Error creating activity", error: error.message });
  }
});

//editing an activity

router.put("/activity", async (req, res) => {
  const {
    activity_id,
    activity_name,
    user_id,
    category_id,
    time_hours,
  } = req.body;
  try {
    const updatedActivity = await db.query(
      `UPDATE activities SET activity_name='${activity_name}', user_id=${user_id}, category_id=${category_id}, time_hours=${time_hours} WHERE activity_id=${activity_id} `
    );
    res.send(updatedActivity);
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Error Updating activity", error: error.message });
  }
});

//getting all user activities of a day
router.get("/activities", async (req, res) => {
  const { date } = req.body;
  try {
    const activities = db.query(
      `SELECT * FROM activities WHERE activity_date = '${date}'`
    );
    res.send(activities);
  } catch (error) {
    res
      .status(400)
      .send({
        msg: "Error fetching activities for that day",
        error: error.message,
      });
  }
});

//deleting an activity

router.delete("/activity", async (req, res) => {
  const { activity_id } = req.body;
  try {
    const deletedActivity = await db.query(
      `DELETE FROM activities where activity_id=${activity_id} RETURNING *`
    );
    res.send(deletedActivity);
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Error eliminating activty", error: error.message });
  }
});

module.exports = router;
