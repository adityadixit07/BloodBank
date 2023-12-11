const userModel = require("../models/userModel");

const getDonarsList = async (req, res) => {
  try {
    const donarsList = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });
    // console.log(donarsList);
    return res.status(200).send({
      success: true,
      message: "Donars list fetched successfully",
      donarsList,
    });
  } catch (error) {
    res.status(500).send({
      message: "Can't fetch donar list",
      success: false,
      error,
    });
  }
};

const getHospitalsList = async (req, res) => {
  try {
    const hospitalsList = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    // console.log(hospitalsList);
    return res.status(200).send({
      success: true,
      message: "Hospitals list fetched successfully",
      hospitalsList,
    });
  } catch (error) {
    res.status(500).send({
      message: "Can't fetch donar list",
      success: false,
      error,
    });
  }
};

const getOrganisationsList = async (req, res) => {
  try {
    const organisationsList = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });
    // console.log(organisationsList);
    return res.status(200).send({
      success: true,
      message: "Organisations list fetched successfully",
      organisationsList,
    });
  } catch (error) {
    res.status(500).send({
      message: "Can't fetch donar list",
      success: false,
      error,
    });
  }
};

module.exports = {
  getDonarsList,
  getHospitalsList,
  getOrganisationsList,
};
