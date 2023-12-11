const express = require("express");
const { getDonarsList, getOrganisationsList, getHospitalsList } = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

router.route("/donars-list").get(authMiddleware,adminMiddleware, getDonarsList);
router.route("/hospitals-list").get(authMiddleware,adminMiddleware, getHospitalsList);
router.route("/organisations-list").get(authMiddleware,adminMiddleware, getOrganisationsList);

module.exports = router;
