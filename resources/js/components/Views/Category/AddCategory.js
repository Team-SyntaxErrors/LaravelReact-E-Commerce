import "./Category.css";
import React, { useContext } from "react";
import CategoryContext from "../../../containers/contexts/category/CategoryContext";

const AddCategory = () => {
    const categoryContext = useContext(CategoryContext);
    const {
        menu,
        categoryForm,
        handleChange,
        submitHandler,
        errors,
        clearFrom
    } = categoryContext;

    return (
        <form onSubmit={submitHandler}>
            <div
                className="modal fade"
                id="add_modal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLongLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5
                                className="modal-title"
                                id="exampleModalLongLabel"
                            >
                                Add Category
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-sm-12 mt-3 text-center">
                                        <img
                                            className="custom-icon rounded-circle"
                                            src={
                                                !categoryForm.category_icon
                                                    ? "backend_assets/img/menu-icon.png"
                                                    : categoryForm.category_icon
                                            }
                                        />
                                        <span className="text-danger" />
                                    </div>
                                    <div className="col-md-9 col-sm-12 ">
                                        <div className="form-group">
                                            <label className="col-lg-6 control-label">
                                                Category Icon:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="file"
                                                    name="category_icon"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    value=""
                                                    placeholder="Enter Menu Icon"
                                                />
                                                <span className="text-danger">
                                                    {errors.category_icon}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-6 control-label">
                                                Menu:
                                            </label>
                                            <div className="col-lg-12">
                                                <select
                                                    name="menu_id"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    value={categoryForm.menu_id}
                                                >
                                                    <option
                                                        value
                                                        defaultValue
                                                        hidden
                                                    >
                                                        --Select One--
                                                    </option>
                                                    {menu.map((menu, i) => (
                                                        <option
                                                            key={i}
                                                            value={menu.menu_id}
                                                        >
                                                            {menu.menu_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <span className="text-danger">
                                                    {errors.menu_id}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Category Name:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    name="category_name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    value={
                                                        categoryForm.category_name
                                                    }
                                                    placeholder="Enter Menu Name"
                                                />
                                                <span className="text-danger">
                                                    {errors.category_name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={clearFrom}
                            >
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default React.memo(AddCategory);
