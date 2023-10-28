const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// register
router.route("/register").post(registerController);
// login
router.route("/login").post(loginController);
//get current user
router.route("/currentuser").get(authMiddleware, currentUserController);

module.exports = router;
