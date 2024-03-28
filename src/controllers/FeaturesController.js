const {
  FeaturesListService,
  CreateFeaturesService,
} = require("../services/FeaturesServices");
exports.FeaturesList = async (req, res) => {
  let result = await FeaturesListService(req);
  return res.status(200).json(result);
};

exports.CreateFeatures = async (req, res) => {
  try {
    let result = await CreateFeaturesService(req);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ status: "fail", error: error.message });
  }
};
