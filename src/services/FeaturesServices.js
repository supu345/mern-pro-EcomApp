const FeaturesModel = require("../models/FeaturesModel");

const CreateFeaturesService = async (req, res) => {
  try {
    let reqBody = req.body;
    let result = await FeaturesModel.create(reqBody);
    return { status: "success", data: result }; // Return the created brand object
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

const FeaturesListService = async () => {
  try {
    let data = await FeaturesModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

module.exports = {
  FeaturesListService,
  CreateFeaturesService,
};
