import React, { useEffect, useRef, useState } from "react";
import {
  ErrorToast,
  IsEmpty,
  SuccessToast,
} from "../../Helper/ValidationHelper";
import { Create } from "../../APIServices/CRUDServices";
import ProductStore from "../../store/ProductStore";
import { useNavigate } from "react-router";

const CreateForm = () => {
  const {
    ListProduct,
    BrandListRequest,
    BrandList,
    CategoryList,
    CategoryListRequest,
    ListByFilterRequest,
  } = ProductStore();

  let [Filter, SetFilter] = useState({
    brandID: "",
    categoryID: "",
    priceMax: "",
    priceMin: "",
  });

  const inputOnChange = async (name, value) => {
    SetFilter((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      BrandList === null ? await BrandListRequest() : null;
      CategoryList === null ? await CategoryListRequest() : null;
      let isEveryFilterPropertyEmpty = Object.values(Filter).every(
        (value) => value === ""
      );
      !isEveryFilterPropertyEmpty ? await ListByFilterRequest(Filter) : null;
    })();
  }, [Filter]);

  let title,
    shortDes,
    price,
    discount,
    discountPrice,
    image,
    star,
    remark,
    stock,
    categoryID,
    brandID = useRef();
  const SaveData = () => {
    let Product_title = title ? title.value : "";
    let Product_shortDes = shortDes ? shortDes.value : "";
    let Product_price = price ? price.value : "";
    let Product_discount = discount ? discount.value : "";
    let Product_discountPrice = discountPrice ? discountPrice.value : "";
    let Product_image = image ? image.value : "";
    let Product_star = star ? star.value : "";
    let Product_remark = remark ? remark.value : "";
    let Product_stock = stock ? stock.value : "";
    let Product_categoryID = categoryID ? categoryID.value : "";
    let Product_brandID = brandID ? brandID.value : "";

    // Rest of the function...

    if (IsEmpty(Product_title)) {
      ErrorToast("Product title Required");
    } else if (IsEmpty(Product_shortDes)) {
      ErrorToast("Product shortDes Required");
    } else if (IsEmpty(Product_price)) {
      ErrorToast("Product price Required");
    } else if (IsEmpty(Product_discount)) {
      ErrorToast("Product discount Required");
    } else if (IsEmpty(Product_discountPrice)) {
      ErrorToast("Product discountPrice Required");
    } else if (IsEmpty(Product_image)) {
      ErrorToast("Product image Required");
    } else if (IsEmpty(Product_star)) {
      ErrorToast("Product star Required");
    } else if (IsEmpty(Product_remark)) {
      ErrorToast("Product remark Required");
    } else if (IsEmpty(Product_stock)) {
      ErrorToast("Product stock Required");
    } else if (IsEmpty(Product_categoryID)) {
      ErrorToast("Product CategoryID Required");
    } else if (IsEmpty(Product_brandID)) {
      ErrorToast("Product brand_ID Required");
    } else {
      const postBody = {
        title: Product_title,
        shortDes: Product_shortDes,
        price: Product_price,
        discount: Product_discount,
        discountPrice: Product_discountPrice,
        image: Product_image,
        star: Product_star,
        remark: Product_remark,
        stock: Product_stock,
        categoryID: Product_categoryID,
        brandID: Product_brandID,
      };

      //Data Create
      Create(postBody).then((Result) => {
        if (Result === true) {
          SuccessToast("Data Save Success");
          navigate("/");
        } else {
          ErrorToast("Request Fail Try again");
        }
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <label>Product title</label>
            <input
              ref={(input) => (title = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Product shortDes</label>
            <input
              ref={(input) => (shortDes = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Product price</label>
            <input
              ref={(input) => (price = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Discount</label>
            <input
              ref={(input) => (discount = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> DiscountPrice</label>
            <input
              ref={(input) => (discountPrice = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Product image</label>
            <input
              ref={(input) => (image = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Product star</label>
            <input
              ref={(input) => (star = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Stock</label>
            <input
              ref={(input) => (stock = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> Remark</label>
            <input
              ref={(input) => (remark = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label>Brands</label>
            <div className="col-md-4 p-2">
              <select
                value={Filter.brandID}
                onChange={async (e) => {
                  await inputOnChange("brandID", e.target.value);
                }}
                className="form-control form-select col-md-4 p-2"
              >
                <option value="">Choose Brand</option>
                {BrandList !== null ? (
                  BrandList.map((item, i) => {
                    return (
                      <option value={item["_id"]}>{item["brandName"]}</option>
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
                value={Filter.categoryID}
                onChange={async (e) => {
                  await inputOnChange("categoryID", e.target.value);
                }}
                className="form-control form-select"
              >
                <option value="">Choose Category</option>
                {CategoryList !== null ? (
                  CategoryList.map((item, i) => {
                    return (
                      <option value={item["_id"]}>
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
          <div className="col-md-4 p-2">
            <label>categoryID</label>
            <input
              ref={(input) => (categoryID = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label> brandID</label>
            <input
              ref={(input) => (brandID = input)}
              type="text"
              className="form-control"
            />
          </div>
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
