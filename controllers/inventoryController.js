const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// create a blood record
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a Hospital account");
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New blood record created successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: false, message: "failed to create inventory", error });
  }
};

// get all blood records

const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "All blood records fetched successfully",
      inventory,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: "failed to get inventory", error });
  }
};

module.exports = {
  createInventoryController,
  getInventoryController,
};
