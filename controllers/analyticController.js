const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");

const bloodGroupDetails = async (req, res) => {
  try {
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
    const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    await Promise.all(
      bloodGroups.map(async (bloodGroup) => {
        // total count of IN
        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: {
                $sum: "$quantity",
              },
            },
          },
        ]);
        //   total count of OUT
        const totalOut = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: {
                $sum: "$quantity",
              },
            },
          },
        ]);

        //   total available blood
        const availableBlood =
          (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);
        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalOut[0]?.total || 0,
          availableBlood,
        });
      })
    );

    return res.status(200).json({
      success: true,
      message: "Blood Data fetch successfully",
      bloodGroupData,
    });
  } catch (error) {
    res.json(500).send({
      status: false,
      message: "Error in fetching blood group details",
      error,
    });
  }
};

// recent inventory
const getRecentInventory = async (req, res) => {
  try {
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    const recentInventory = await inventoryModel
      .find({ organisation })
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json({
      success: true,
      message: "Recent Inventory fetch successfully",
      recentInventory,
    });
  } catch (error) {
    res.json(500).send({
      status: false,
      message: "Error in fetching recent inventory",
      error,
    });
  }
};

module.exports = {
  bloodGroupDetails,
  getRecentInventory,
};
