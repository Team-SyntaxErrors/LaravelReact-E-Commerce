import React, { useContext } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import ProductContext from "../../containers/contexts/product/ProductContext";
import ReactTagInput from "@pathofdev/react-tag-input";

const AddProduct = () => {
    const productContext = useContext(ProductContext);
    const {
        submitHandler,
        product,
        handleChange,
        slugger,
        simpleValidator,
        error,
        slugWarning
    } = productContext;
    return (
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
                                        onBlur={slugger}
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
                                            handleChange(e), getSubCategory(e)
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
                                        onChange={newTags => setTags(newTags)}
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
    );
};

export default React.memo(AddProduct);
