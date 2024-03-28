const {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListBySimilarService,
  ListByKeywordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
  CreateBrandService,
  CreateCategoryService,
  CreateSliderListService,
  CreateProductService,
  CreateDetailsService,
  CreateReviewService,
  ReadProductService,
  ReadProductByIDService,
  UpdateProductService,
  DeleteProductService,
} = require("../services/ProductServices");

exports.CreateProduct = async (req, res) => {
  try {
    let result = await CreateProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateBrand controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};
exports.ReadProduct = async (req, res) => {
  try {
    let result = await ReadProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateBrand controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.ReadProductByID = async (req, res) => {
  try {
    let result = await ReadProductByIDService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in ReadProductByID controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.UpdateProduct = async (req, res) => {
  try {
    let result = await UpdateProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in UpdateProduct controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};
exports.DeleteProduct = async (req, res) => {
  try {
    let result = await DeleteProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in UpdateProduct controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.CreateBrand = async (req, res) => {
  try {
    let result = await CreateBrandService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateBrand controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.ProductBrandList = async (req, res) => {
  let result = await BrandListService();
  return res.status(200).json(result);
};

exports.ProductBrandList = async (req, res) => {
  let result = await BrandListService();
  return res.status(200).json(result);
};

exports.CreateCategory = async (req, res) => {
  try {
    let result = await CreateCategoryService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateBrand controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.ProductCategoryList = async (req, res) => {
  let result = await CategoryListService();
  return res.status(200).json(result);
};

exports.CreateSliderList = async (req, res) => {
  try {
    let result = await CreateSliderListService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateBrand controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};
exports.ProductSliderList = async (req, res) => {
  let result = await SliderListService();
  return res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.status(200).json(result);
};

exports.ProductListByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.status(200).json(result);
};
exports.ProductListBySimilar = async (req, res) => {
  let result = await ListBySimilarService(req);
  return res.status(200).json(result);
};

exports.ProductDetails = async (req, res) => {
  let result = await DetailsService(req);
  return res.status(200).json(result);
};

//create details contoller
exports.CreateProductDetails = async (req, res) => {
  try {
    let result = await CreateDetailsService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateDetails Product controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.ProductListByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.status(200).json(result);
};
exports.ProductReviewList = async (req, res) => {
  let result = await ReviewListService(req);
  return res.status(200).json(result);
};

exports.CreateReview = async (req, res) => {
  try {
    let result = await CreateReviewService(req);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ status: "fail", error: error.message }); // Handling errors in the controller
  }
};
