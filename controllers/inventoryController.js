const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// create a blood record
const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }
    // if (inventoryType === "out" && user.role !== "hospital") {
    //   throw new Error("Not a Hospital account");
    // }

    if (req.body.inventoryType === "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityofBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      // calcutation of total quantity of blood
      const totalInofRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalIn = totalInofRequestedBloodGroup[0]?.total || 0;
      // console.log("total IN :", totalIn);
      //calculation of total out of blood outquantity
      const totalOutofRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalOut = totalOutofRequestedBloodGroup[0]?.total || 0;
      // console.log("total out :", totalOut);
      const totalAvailableQunatityofBloodGroup = totalIn - totalOut;
      // console.log(totalAvailableQunatityofBloodGroup);
      if (totalAvailableQunatityofBloodGroup < requestedQuantityofBlood) {
        // throw new Error("Not enough blood available");
        return res.status(500).send({
          success: false,
          message: `Only ${totalAvailableQunatityofBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }
      req.body.hospital = user?._id;
    } else {
      req.body.donar = user?._id;
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
      .send({ status: false, message: "Failed to create inventory", error });
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
