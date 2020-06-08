const router = require("express").Router();
const db = require("../data/dbConfig.js");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const accounts = await db.select("*").from("accounts");
    res.status(200).json(accounts);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [account] = await db.select("*").from("accounts").where({ id });
    res.status(200).json(account);
  } catch (error) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const count = await db.delete("*").from("accounts").where({ id });
    res.status(200).json(count);
  } catch (error) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const count = await db("accounts").update(req.body).where({ id });
    res.status(200).json(count);
  } catch (error) {
    res.status(400).json(err);
  }
});
