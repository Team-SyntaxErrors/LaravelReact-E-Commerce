import "@pathofdev/react-tag-input/build/index.css";
import "./AddProduct.module.css";

import React, { Fragment, useEffect, useRef, useState } from "react";

import Axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import ReactTagInput from "@pathofdev/react-tag-input";
import SimpleReactValidator from "simple-react-validator";
import slugify from "react-slugify";
import { toast } from "react-toastify";

const AddProduct = props => {
    const [Category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [Brand, setBrand] = useState([]);
    const [Unit, setUnit] = useState([]);
    const [SlugWarning, setSlugWarning] = useState("");
    const [error, setError] = useState([]);
    const simpleValidator = useRef(new SimpleReactValidator());
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
        description: ""
    });

    const handleChange = event => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const slugger = event => {
        let name = event.target.value;
        let slug = "";
        setSlugWarning("");
        // Change to lower case
        let nameLower = name.toLowerCase();
        // Letter "e"
        slug = nameLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
        // Letter "d"
        slug = slug.replace(/đ/gi, "d");
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, "");
        // Change whitespace to "-"
        slug = slug.replace(/\s+/g, "-");
        slug = slug.replace("'", "");

        Axios.get("/product_slug_check/" + slug)
            .then(response => {
                if (response.status === 204) {
                    setProduct({ ...product, ["product_slug"]: slug });
                } else {
                    setSlugWarning("This slug is recorded already");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const setTags = newTags => {
        setProduct({ ...product, ["tags"]: newTags });
        // simpleValidator.current.showMessageFor("tags");
    };

    const setDescription = description => {
        setProduct({ ...product, ["description"]: description });
        // simpleValidator.current.showMessageFor("description");
    };

    const GetCategory = () => {
        Axios.get("/all_categories")
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(error => {
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
    const CategoryChange = event => {
        GetSubCategory(event.target.value);
    };

    /**
     * Get category wise sub category.
     *
     * @param {int} category_id
     */
    const GetSubCategory = category_id => {
        Axios.get("/subcategory_get/" + category_id)
            .then(response => {
                setSubCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const GetBrand = () => {
        Axios.get("/all_brand_get")
            .then(response => {
                setBrand(response.data.data);
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
                setUnit(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetUnit();
    }, []);

    const ClearFrom = () => {
        setError([]);
        let form = product;
        Object.keys(form).forEach(function(key) {
            form[key] = "";
        });
        form.tags = [];
        setProduct({ ...product, ...form });
    };

    const submitHandler = event => {
        event.preventDefault();
        console.log(simpleValidator.current);
        if (simpleValidator.current.allValid()) {
            Axios.post("/products", product)
                .then(response => {
                    if (response.data.code === 201) {
                        toast.success("Product Data Inserted Successfully!");
                        ClearFrom();
                    }
                })
                .catch(error => {
                    if (error.response) {
                        setError(error.response.data.errors);
                    }
                });
        } else {
            setError(simpleValidator.current.errorMessages);
            // simpleValidator.current.showMessages();
            // console.log(simpleValidator.current);
            // simpleValidator.current.forceUpdate();
        }
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
                                            onKeyUp={slugger}
                                        />
                                        {simpleValidator.current.message(
                                            "product_name",
                                            product.product_name,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.product_name}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                        />
                                        {simpleValidator.current.message(
                                            "product_sku",
                                            product.product_sku,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.product_sku}
                                        </span>
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
                                            onChange={e => (
                                                handleChange(e),
                                                CategoryChange(e)
                                            )}
                                        >
                                            <option defaultValue hidden>
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
                                        {simpleValidator.current.message(
                                            "category_id",
                                            product.category_id,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.category_id}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                            value={product.subcategory_id}
                                        >
                                            <option defaultValue hidden>
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
                                        {simpleValidator.current.message(
                                            "subcategory_id",
                                            product.subcategory_id,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.subcategory_id}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                            value={product.brand_id}
                                        >
                                            <option defaultValue hidden>
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
                                        {simpleValidator.current.message(
                                            "brand_id",
                                            product.brand_id,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.brand_id}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                        />
                                        {simpleValidator.current.message(
                                            "purchase_price",
                                            product.purchase_price,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.purchase_price}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                            placeholder="Enter Product Sell Price"
                                        />
                                        {simpleValidator.current.message(
                                            "sell_price",
                                            product.sell_price,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.sell_price}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                            name="unit_id"
                                            value={product.unit_id}
                                        >
                                            <option defaultValue hidden>
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
                                        {simpleValidator.current.message(
                                            "unit_id",
                                            product.unit_id,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.unit_id}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                            value={product.product_alert_qty}
                                            placeholder="Enter Product Alert Quantity"
                                        />
                                        {simpleValidator.current.message(
                                            "product_alert_qty",
                                            product.product_alert_qty,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.product_alert_qty}
                                        </span>
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
                                            onChange={newTags =>
                                                setTags(newTags)
                                            }
                                            placeholder={"Product Tags"}
                                        />
                                        {simpleValidator.current.message(
                                            "tags",
                                            product.tags,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.tags}
                                        </span>
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
                                            onChange={e => handleChange(e)}
                                            className="form-control"
                                            value={product.status}
                                        >
                                            <option defaultValue hidden>
                                                --Select Status--
                                            </option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                        {simpleValidator.current.message(
                                            "status",
                                            product.status,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.status}
                                        </span>
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
                                        {simpleValidator.current.message(
                                            "description",
                                            product.description,
                                            "required"
                                        )}
                                        <span className="text-danger">
                                            {error.description}
                                        </span>
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
