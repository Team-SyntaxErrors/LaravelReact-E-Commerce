import "./AddProduct.module.css";
import "@pathofdev/react-tag-input/build/index.css";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../Layouts/PageHeader/PageHeader";
import useForms from "../../customHooks/useForms";
import ReactTagInput from "@pathofdev/react-tag-input";
import SimpleReactValidator from "simple-react-validator";
import Slugger from "../../helpers/slugger/Slugger";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";
import Axios from "axios";

const EditProduct = props => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [unit, setUnit] = useState([]);
    const [slugWarning, setSlugWarning] = useState("");
    const [error, setError] = useState([]);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [editProduct, setEditProduct, handleChange] = useForms({
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
        product_tags: [],
        status: "",
        description: ""
    });

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        getCategory();
        getBrand();
        getUnit();
    }, []);

    const getProduct = async () => {
        await Axios.get(`/products/${props.productId}/edit`)
            .then(response => {
                let editData = response.data.data;
                let productTags = [];
                setEditProduct({ ...editProduct, ...editData });
                for (let index = 0; index < editData.tags.length; index++) {
                    productTags.push(editData.tags[index].tags);
                }
                setEditProduct({
                    ...editData,
                    ["product_tags"]: productTags
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getCategory = async () => {
        await Axios.get(`/all_categories`)
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getSubCategory = async event => {
        let category_id = event.target.value;
        await Axios.get(`/subcategory_get/${category_id}`)
            .then(response => {
                setSubCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getBrand = async () => {
        await Axios.get(`/all_brand_get`)
            .then(response => {
                setBrand(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getUnit = async () => {
        await Axios.get(`/all_unit_get`)
            .then(response => {
                setUnit(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const setTags = newTags => {
        setEditProduct({ ...editProduct, ["product_tags"]: newTags });
    };

    const setDescription = description => {
        setEditProduct({ ...editProduct, ["description"]: description });
    };

    const slugger = event => {
        let name = event.target.value;
        if (name == "") {
            setSlugWarning("Name field is empty");
            return;
        }
        setSlugWarning("");
        let slug = Slugger(name);
        // Check slug availability from database
        Axios.get(`/product_slug_check/${slug}`)
            .then(response => {
                if (response.status == 204) {
                    setEditProduct({ ...editProduct, ["product_slug"]: slug });
                } else {
                    setSlugWarning("This slug is recorded already");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateHandler = e => {
        e.preventDefault();
        Axios.put(`/products/${editProduct.product_id}`, editProduct)
            .then(response => {
                // if (response.data.code === 201) {
                toast.success("Product Data Updated Successfully!");
                // }
            })
            .catch(error => {
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
                    <h3>Edit Product</h3>
                    <button className="btn btn-info table-button">
                        <Link
                            to={{
                                pathname: "/product/product-list",
                                state: "Product"
                            }}
                        >
                            <i className="ik ik-clipboard"></i>
                            Product List
                        </Link>
                    </button>{" "}
                </div>
                <form onSubmit={updateHandler} id="product-from">
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
                                            value={editProduct.product_name}
                                            className="form-control"
                                            placeholder="Enter Product Name"
                                            onChange={handleChange}
                                            onBlur={slugger}
                                        />
                                        {simpleValidator.current.message(
                                            "product_name",
                                            editProduct.product_name,
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
                                            value={editProduct.product_slug}
                                            readOnly
                                        />
                                        <span className="text-danger">
                                            {slugWarning}
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
                                            value={editProduct.product_sku}
                                            className="form-control"
                                            placeholder="Enter Product Sku"
                                            onChange={e => handleChange(e)}
                                        />
                                        {simpleValidator.current.message(
                                            "product_sku",
                                            editProduct.product_sku,
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
                                            value={editProduct.category_id}
                                            onChange={e => (
                                                handleChange(e),
                                                getSubCategory(e)
                                            )}
                                        >
                                            <option defaultValue hidden>
                                                --Select Category--
                                            </option>
                                            {category.map(category => (
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
                                            editProduct.category_id,
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
                                            value={editProduct.subcategory_id}
                                        >
                                            <option defaultValue hidden>
                                                --Select Sub Category--
                                            </option>
                                            {subCategory.map((sub, i) => (
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
                                            editProduct.subcategory_id,
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
                                            value={editProduct.brand_id}
                                        >
                                            <option defaultValue hidden>
                                                --Select Brand--
                                            </option>
                                            {brand.map((brand, i) => (
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
                                            editProduct.brand_id,
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
                                            value={editProduct.purchase_price}
                                            onChange={e => handleChange(e)}
                                        />
                                        {simpleValidator.current.message(
                                            "purchase_price",
                                            editProduct.purchase_price,
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
                                            value={editProduct.sell_price}
                                            onChange={e => handleChange(e)}
                                            placeholder="Enter Product Sell Price"
                                        />
                                        {simpleValidator.current.message(
                                            "sell_price",
                                            editProduct.sell_price,
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
                                            value={editProduct.unit_id}
                                        >
                                            <option defaultValue hidden>
                                                --Select Unit--
                                            </option>
                                            {unit.map((unit, i) => (
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
                                            editProduct.unit_id,
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
                                            value={
                                                editProduct.product_alert_qty
                                            }
                                            placeholder="Enter Product Alert Quantity"
                                        />
                                        {simpleValidator.current.message(
                                            "product_alert_qty",
                                            editProduct.product_alert_qty,
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
                                            tags={editProduct.product_tags}
                                            onChange={newTags =>
                                                setTags(newTags)
                                            }
                                            placeholder={"Product Tags"}
                                        />
                                        {simpleValidator.current.message(
                                            "tags",
                                            editProduct.product_tags,
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
                                            value={editProduct.status}
                                        >
                                            <option defaultValue hidden>
                                                --Select Status--
                                            </option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                        {simpleValidator.current.message(
                                            "status",
                                            editProduct.status,
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
                                            data={editProduct.description}
                                        />
                                        {simpleValidator.current.message(
                                            "description",
                                            editProduct.description,
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

export default EditProduct;
