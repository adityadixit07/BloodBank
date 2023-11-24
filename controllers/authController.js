const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .send({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    // creating a new user
    const user = new userModel(req.body); //ye body me jo bhi data aaya hai usko userModel me dal dega
    await user.save();
    return res.status(201).send({
      user,
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: false, message: "failed to create the user", error });
  }
};

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User does not exist or invalid Credentials!",
      });
    }

    if (user.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "Role not match!",
      });
    }

    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials!",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      user,
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "failed to login", error });
  }
};

const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    // .select("-password");
    if (!user) {
      return res.status(404).send({ status: false, message: "User not found" });
    }
    return res
      .status(200)
      .send({ success: true, message: "User found successfully", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: false, message: "failed to get current user", error });
  }
};

module.exports = {
  registerController,
  loginController,
  currentUserController,
};
