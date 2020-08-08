const express = require("express");
const db = require("../db/db");
const router = express.Router();

//creating a new category (only admins can create more categories)
router.post("/categories", async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await db.query(
      `INSERT INTO categories(cat_name) values('${name}') RETURNING *`
    );
    res.send(newCategory);
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .send({ msg: "Error creating a new category", error: error.message });
  }
});

//Deleting a category
router.delete("/categories", async (req, res) => {
  const { id } = req.body;
  try {
    const categoryDeleted = db.query(
      `DELETE FROM categories WHERE category_id=${id} RETURNING *`
    );
    res.send({ msg: "Category Deleted" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .send({ msg: "Error deleting the category", error: error.message });
  }
});

module.exports = router;
