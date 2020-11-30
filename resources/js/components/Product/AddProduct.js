import "@pathofdev/react-tag-input/build/index.css";
import "./AddProduct.module.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import ReactTagInput from "@pathofdev/react-tag-input";
import slugify from "react-slugify";
import { toast } from "react-toastify";

const AddProduct = props => {
    const [Category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [Brand, setBrand] = useState([]);
    const [Unit, setUnit] = useState([]);
    const [SlugWarning, setSlugWarning] = useState("");

    const [product_name, setProductName] = useState("");
    const [product_slug, setProductSlug] = useState("");
    const [product_sku, setProductSku] = useState("");
    const [category_id, setCategoryId] = useState(0);
    const [subcategory_id, setSubCategoryId] = useState(0);
    const [brand_id, setBrandId] = useState(0);
    const [purchase_price, setPurchasePrice] = useState(0);
    const [sell_price, setSellPrice] = useState(0);
    const [unit_id, setUnitId] = useState(0);
    const [product_alert_qty, setAlertQty] = useState(0);
    const [tags, setTags] = useState([]);
    const [status, setStatus] = useState(0);
    const [description, setDescription] = useState(0);

    const GetCategory = () => {
        Axios.get("/categories")
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetCategory();
    }, []);

    const CategoryChange = e => {
        GetSubCategory(e.target.value);
        setCategoryId(e.target.value);
    };

    const GetSubCategory = category_id => {
        Axios.get("/subcategory_get/" + category_id)
            .then(response => {
                setSubCategory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const GetBrand = () => {
        Axios.get("/all_brand_get")
            .then(response => {
                setBrand(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetBrand();
    }, []);

    const GetUnit = () => {
        Axios.get("/all_unit_get")
            .then(response => {
                setUnit(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetUnit();
    }, []);

    const Slugger = e => {
        let slug = e.target.value;
        slug = slugify(slug);
        Axios.get("/product_slug_check/?slug=" + slug)
            .then(response => {
                if (response.status == 201) {
                    setSlugWarning("");
                    setProductSlug(slug);
                } else if (response.status == 200) {
                    setSlugWarning("This slug is recorded already");
                } else {
                    setSlugWarning("This slug is recorded already");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const submitHandler = e => {
        e.preventDefault();
        const data = {
            product_name,
            product_slug,
            product_sku,
            category_id,
            subcategory_id,
            brand_id,
            purchase_price,
            sell_price,
            unit_id,
            product_alert_qty,
            tags,
            status,
            description
        };
        Axios.post("/products", data)
            .then(response => {
                if (response.data.code == 201) {
                    ClearForm();
                    toast.success("Product Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };
    const ClearForm = () => {
        setProductName("");
        setProductSlug("");
        setProductSku("");
        setCategoryId(0);
        setSubCategoryId(0);
        setBrandId(0);
        setPurchasePrice(0);
        setSellPrice(0);
        setUnitId(0);
        setAlertQty(0);
        setTags([]);
        setStatus(0);
        setDescription("");
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
                            state: "Product"
                        }}
                    >
                        <button className="btn btn-info table-button">
                            <i className="ik ik-clipboard"></i>
                            Product List
                        </button>{" "}
                    </Link>
                </div>
                <form onSubmit={submitHandler}>
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
                                            className="form-control"
                                            placeholder="Enter Product Name"
                                            onChange={e =>
                                                setProductName(e.target.value)
                                            }
                                            onKeyUp={e => Slugger(e)}
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
                                            value={product_slug}
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
                                            className="form-control"
                                            placeholder="Enter Product Sku"
                                            onChange={e =>
                                                setProductSku(e.target.value)
                                            }
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
                                            onChange={e => CategoryChange(e)}
                                        >
                                            <option defaultValue>
                                                --Select Category--
                                            </option>
                                            {Category.map((category, i) => (
                                                <option
                                                    key={i}
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
                                            onChange={e =>
                                                setSubCategoryId(e.target.value)
                                            }
                                        >
                                            <option defaultValue>
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
                                            onChange={e =>
                                                setBrandId(e.target.value)
                                            }
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
                                            onChange={e =>
                                                setPurchasePrice(e.target.value)
                                            }
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
                                            onChange={e =>
                                                setSellPrice(e.target.value)
                                            }
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
                                            onChange={e =>
                                                setUnitId(e.target.value)
                                            }
                                            name="unit_id"
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
                                            onChange={e =>
                                                setAlertQty(e.target.value)
                                            }
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
                                        {/* <input
                                        type="text"
                                        name="tags"
                                        className="form-control"
                                        placeholder="Enter Product Slug"
                                        onChange={handleChange}
                                    /> */}
                                        <ReactTagInput
                                            tags={tags}
                                            onChange={newTags =>
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
                                        {/* <input
                                        type="text"
                                        name="status"
                                        className="form-control"
                                        placeholder="Enter Product Sku"
                                    /> */}
                                        <select
                                            name="status"
                                            onChange={e =>
                                                setStatus(e.target.value)
                                            }
                                            className="form-control"
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
                                            name="product_description"
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setDescription(data);
                                            }}
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
