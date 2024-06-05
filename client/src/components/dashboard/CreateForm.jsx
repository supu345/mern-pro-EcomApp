import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ErrorToast,
  IsEmpty,
  SuccessToast,
} from "../../Helper/ValidationHelper";
import ProductStore from "../../store/ProductStore";

const CreateForm = () => {
  let navigate = useNavigate();
  const {
    BrandList,
    CategoryList,
    BrandListRequest,
    CategoryListRequest,
    CreateProductRequest,
    productFormData,
    productFormOnChange,
  } = ProductStore();

  console.log(BrandList);

  useEffect(() => {
    (async () => {
      BrandList === null ? await BrandListRequest() : null;
      CategoryList === null ? await CategoryListRequest() : null;
    })();
  }, []);

  const SaveData = async () => {
    if (IsEmpty(productFormData.title)) {
      ErrorToast("Product title Required");
    } else if (IsEmpty(productFormData.shortDes)) {
      ErrorToast("Product shortDes Required");
    } else if (IsEmpty(productFormData.price)) {
      ErrorToast("Product price Required");
    } else if (IsEmpty(productFormData.discount)) {
      ErrorToast("Product discount Required");
    } else if (IsEmpty(productFormData.discountPrice)) {
      ErrorToast("Product discountPrice Required");
    } else if (IsEmpty(productFormData.image)) {
      ErrorToast("Product image Required");
    } else if (IsEmpty(productFormData.star)) {
      ErrorToast("Product star Required");
    } else if (IsEmpty(productFormData.remark)) {
      ErrorToast("Product remark Required");
    } else if (IsEmpty(productFormData.stock)) {
      ErrorToast("Product stock Required");
    } else if (IsEmpty(productFormData.categoryID)) {
      ErrorToast("Product CategoryID Required");
    } else if (IsEmpty(productFormData.brandID)) {
      ErrorToast("Product brand_ID Required");
    } else {
      const result = await CreateProductRequest(productFormData);
      console.log(result);
      if (result.status === "success") {
        SuccessToast("Data Save Success");
        navigate("/");
      } else {
        ErrorToast("Request Fail Try again");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <label>Product title</label>
            <input
              value={productFormData.title}
              onChange={(e) => {
                productFormOnChange("title", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Product shortDes</label>
            <input
              value={productFormData.shortDes}
              onChange={(e) => {
                productFormOnChange("shortDes", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Product price</label>
            <input
              value={productFormData.price}
              onChange={(e) => {
                productFormOnChange("price", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Discount</label>
            <input
              value={productFormData.discount}
              onChange={(e) => {
                productFormOnChange("discount", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> DiscountPrice</label>
            <input
              value={productFormData.discountPrice}
              onChange={(e) => {
                productFormOnChange("discountPrice", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Product image</label>
            <input
              value={productFormData.image}
              onChange={(e) => {
                productFormOnChange("image", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Product star</label>
            <input
              value={productFormData.star}
              onChange={(e) => {
                productFormOnChange("star", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Stock</label>
            <input
              value={productFormData.stock}
              onChange={(e) => {
                productFormOnChange("stock", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Remark</label>
            <input
              value={productFormData.remark}
              onChange={(e) => {
                productFormOnChange("remark", e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label>Brands</label>
            <div className="col-md-4 p-2">
              <select
                value={productFormData.categoryID}
                onChange={(e) => {
                  productFormOnChange("categoryID", e.target.value);
                }}
                className="form-control form-select col-md-4 p-2"
              >
                <option value="">Choose Brand</option>
                {BrandList !== null ? (
                  BrandList.map((item, i) => {
                    return (
                      <option key={i} value={item["_id"]}>
                        {item["brandName"]}
                      </option>
                    );
                  })
                ) : (
                  <option></option>
                )}
              </select>
            </div>
          </div>
          <div>
            <label>Categories</label>
            <div className="col-md-4 p-2">
              <select
                value={productFormData.brandID}
                onChange={(e) => {
                  productFormOnChange("brandID", e.target.value);
                }}
                className="form-control form-select"
              >
                <option value="">Choose Category</option>
                {CategoryList !== null ? (
                  CategoryList.map((item, i) => {
                    return (
                      <option key={i} value={item["_id"]}>
                        {item["categoryName"]}
                      </option>
                    );
                  })
                ) : (
                  <option></option>
                )}
              </select>
            </div>
          </div>
          <div></div>
        </div>

        <div className="row">
          <div className="col-md-4 p-2">
            <button onClick={SaveData} className="btn btn-success w-100">
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
