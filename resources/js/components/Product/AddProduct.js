import "@pathofdev/react-tag-input/build/index.css";
import "./AddProduct.module.css";

import React, { Fragment, useEffect, useState, useRef } from "react";

import Axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import ReactTagInput from "@pathofdev/react-tag-input";
import slugify from "react-slugify";
import { toast } from "react-toastify";

const AddProduct = (props) => {
    const [Category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [Brand, setBrand] = useState([]);
    const [Unit, setUnit] = useState([]);
    const [SlugWarning, setSlugWarning] = useState("");
    const [error, setError] = useState([]);
    const [product, setProduct] = useState({
        product_name: "",
        product_slug: "",
        product_sku: "",
        category_id: "",
        subcategory_id: "",
        brand_id: "",
        purchase_price: "",
        sell_price: "",
        unit_id: "",
        product_alert_qty: "",
        tags: [],
        status: "",
        description: "",
    });

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const Slugger = (event) => {
        let slug = event.target.value;
        slug = slugify(slug);
        Axios.get("/product_slug_check/?slug=" + slug)
            .then((response) => {
                if (response.status == 201) {
                    setSlugWarning("");
                    setProduct({ ...product, ["product_slug"]: slug });
                } else if (response.status == 200) {
                    setSlugWarning("This slug is recorded already");
                } else {
                    setSlugWarning("This slug is recorded already");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const setTags = (newTags) => {
        setProduct({ ...product, ["tags"]: newTags });
    };

    const setDescription = (description) => {
        setProduct({ ...product, ["description"]: description });
    };

    const GetCategory = () => {
        Axios.get("/all_categories")
            .then((response) => {
                setCategory(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetCategory();
    }, []);

    /**
     *
     * @param {object} event
     */
    const CategoryChange = (event) => {
        GetSubCategory(event.target.value);
    };

    /**
     * Get category wise sub category.
     *
     * @param {int} category_id
     */
    const GetSubCategory = (category_id) => {
        Axios.get("/subcategory_get/" + category_id)
            .then((response) => {
                setSubCategory(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const GetBrand = () => {
        Axios.get("/all_brand_get")
            .then((response) => {
                setBrand(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetBrand();
    }, []);

    const GetUnit = () => {
        Axios.get("/all_unit_get")
            .then((response) => {
                setUnit(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetUnit();
    }, []);

    const ClearFrom = () => {
        let form = product;
        Object.keys(form).forEach(function (key) {
            form[key] = "";
        });
        form.tags = [];
        setProduct({ ...product, ...form });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        Axios.post("/products", product)
            .then((response) => {
                if (response.data.code === 201) {
                    toast.success("Product Data Inserted Successfully!");
                    ClearFrom();
                }
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.errors);
                }
            });
    };
    return (
        <Fragment>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />

            <div className="card">
                <div className="card-header d-block">
                    <h3>Add Product</h3>
                    <Link
                        to={{
                            pathname: "/product",
                            state: "Product",
                        }}
                    >
                        <button className="btn btn-info table-button">
                            <i className="ik ik-clipboard"></i>
                            Product List
                        </button>{" "}
                    </Link>
                </div>
                <form onSubmit={submitHandler} id="product-from">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Name:
                                    </label>
                                    <div className="col-lg-12">
                                        <input
                                            type="text"
                                            name="product_name"
                                            value={product.product_name}
                                            className="form-control"
                                            placeholder="Enter Product Name"
                                            onChange={handleChange}
                                            onKeyUp={Slugger}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Slug:
                                    </label>
                                    <div className="col-lg-12">
                                        <input
                                            type="text"
                                            name="product_slug"
                                            className="form-control"
                                            placeholder="Product Slug"
                                            value={product.product_slug}
                                            readOnly
                                        />
                                        <span className="text-danger">
                                            {SlugWarning}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Sku:
                                    </label>
                                    <div className="col-lg-12">
                                        <input
                                            type="text"
                                            name="product_sku"
                                            value={product.product_sku}
                                            className="form-control"
                                            placeholder="Enter Product Sku"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Category:
                                    </label>
                                    <div className="col-lg-12">
                                        <select
                                            className="form-control"
                                            name="category_id"
                                            value={product.category_id}
                                            onChange={(e) => (
                                                handleChange(e),
                                                CategoryChange(e)
                                            )}
                                        >
                                            <option
                                                defaultValue
                                                selected
                                                hidden
                                            >
                                                --Select Category--
                                            </option>
                                            {Category.map((category, i) => (
                                                <option
                                                    key={category.category_id}
                                                    value={category.category_id}
                                                >
                                                    {category.category_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Sub Category:
                                    </label>
                                    <div className="col-lg-12">
                                        <select
                                            className="form-control"
                                            name="subcategory_id"
                                            onChange={(e) => handleChange(e)}
                                            value={product.subcategory_id}
                                        >
                                            <option
                                                defaultValue
                                                selected
                                                hidden
                                            >
                                                --Select Sub Category--
                                            </option>
                                            {SubCategory.map((sub, i) => (
                                                <option
                                                    key={i}
                                                    value={sub.sub_category_id}
                                                >
                                                    {sub.sub_category_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Brand:
                                    </label>
                                    <div className="col-lg-12">
                                        <select
                                            className="form-control"
                                            name="brand_id"
                                            onChange={(e) => handleChange(e)}
                                            value={product.brand_id}
                                        >
                                            <option defaultValue>
                                                --Select Brand--
                                            </option>
                                            {Brand.map((brand, i) => (
                                                <option
                                                    key={i}
                                                    value={brand.brand_id}
                                                >
                                                    {brand.brand_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Purchase Price:
                                    </label>
                                    <div className="col-lg-12">
                                        <input
                                            type="number"
                                            name="purchase_price"
                                            className="form-control"
                                            placeholder="Enter Product Purchase Price"
                                            value={product.purchase_price}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Sell Price:
                                    </label>
                                    <div className="col-lg-12">
                                        <input
                                            type="number"
                                            name="sell_price"
                                            className="form-control"
                                            value={product.sell_price}
                                            onChange={(e) => handleChange(e)}
                                            placeholder="Enter Product Sell Price"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Unit:
                                    </label>
                                    <div className="col-lg-12">
                                        <select
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            name="unit_id"
                                            value={product.unit_id}
                                        >
                                            <option defaultValue>
                                                --Select Unit--
                                            </option>
                                            {Unit.map((unit, i) => (
                                                <option
                                                    key={i}
                                                    value={unit.unit_id}
                                                >
                                                    {unit.unit_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Alert Quantity:
                                    </label>
                                    <div className="col-lg-12">
                                        <input
                                            type="number"
                                            name="product_alert_qty"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={product.product_alert_qty}
                                            placeholder="Enter Product Alert Quantity"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Tag:
                                    </label>
                                    <div className="col-lg-12">
                                        <ReactTagInput
                                            tags={product.tags}
                                            onChange={(newTags) =>
                                                setTags(newTags)
                                            }
                                            placeholder={"Product Tags"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Status:
                                    </label>
                                    <div className="col-lg-12">
                                        <select
                                            name="status"
                                            onChange={(e) => handleChange(e)}
                                            className="form-control"
                                            value={product.status}
                                        >
                                            <option>--Select Status--</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group ">
                                    <label className="col-lg-6 control-label">
                                        Product Description:
                                    </label>
                                    <div className="col-lg-12">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            name="description"
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setDescription(data);
                                            }}
                                            data={product.description}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-default">Back</button>
                        <button className="btn btn-success">Save</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default AddProduct;
