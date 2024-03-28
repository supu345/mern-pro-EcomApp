const express = require("express");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const AuthVerification = require("../middlewares/AuthVerification");
const FeaturesController = require("../controllers/FeaturesController");
const router = express.Router();

//Product ReadProduct
router.post("/CreateProduct", ProductController.CreateProduct);
router.get("/ReadProduct", ProductController.ReadProduct);
router.get("/ReadProductByID/:id", ProductController.ReadProductByID);
router.post("/UpdateProduct/:id", ProductController.UpdateProduct);
router.get("/DeleteProduct/:id", ProductController.DeleteProduct);
router.post("/CreateBrand", ProductController.CreateBrand);
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.post("/CreateCategory", ProductController.CreateCategory);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.post("/CreateSliderList", ProductController.CreateSliderList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get(
  "/ProductListByBrand/:BrandID",
  ProductController.ProductListByBrand
);
router.get(
  "/ProductListByCategory/:CategoryID",
  ProductController.ProductListByCategory
);
router.get(
  "/ProductListBySimilar/:Keyword",
  ProductController.ProductListBySimilar
);
router.get(
  "/ProductListByKeyword/:Keyword",
  ProductController.ProductListByKeyword
);
router.get(
  "/ProductListByRemark/:Remark",
  ProductController.ProductListByRemark
);

router.post("/CreateProductDetails", ProductController.CreateProductDetails);
router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);
router.get(
  "/ProductReviewList/:ProductID",
  ProductController.ProductReviewList
);

//user
router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.get("/UserLogout", AuthVerification, UserController.UserLogout);
router.post("/CreateProfile", AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile", AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile", AuthVerification, UserController.ReadProfile);

// Features

router.post("/CreateFeatures", FeaturesController.CreateFeatures);
router.get("/FeaturesList", FeaturesController.FeaturesList);

// Create Review
router.post("/CreateReview", AuthVerification, ProductController.CreateReview);

module.exports = router;
