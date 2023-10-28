const express = require("express");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// create blood record
router
  .route("/create-inventory")
  .post(authMiddleware, createInventoryController);

// get all blood records
router.route("/get-inventory").get(authMiddleware, getInventoryController);

module.exports = router;
