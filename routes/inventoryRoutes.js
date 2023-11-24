const express = require("express");
const {
  createInventoryController,
  getInventoryController,
  getDonarRecords,
  getHostpitalsRecords,
  getOrganisationsRecords,
  getOrganisationsRecordsForHospital,
  getInventoryHospitalController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// create blood record
router
  .route("/create-inventory")
  .post(authMiddleware, createInventoryController);

// get all blood records
router.route("/get-inventory").get(authMiddleware, getInventoryController);

// get hospital consumer record
router
  .route("/get-inventory-hospital")
  .post(authMiddleware, getInventoryHospitalController);

// donar records
router.route("/get-donars").get(authMiddleware, getDonarRecords);

// hospital records
router.route("/get-hospitals").get(authMiddleware, getHostpitalsRecords);

//organisation records
router.route("/get-organisations").get(authMiddleware, getOrganisationsRecords);

// organisation for hospital
router
  .route("/get-org-for-hospital")
  .get(authMiddleware, getOrganisationsRecordsForHospital);
module.exports = router;
