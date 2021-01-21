import React, { useContext } from "react";

import SubCategoryContext from "../../../containers/contexts/subcategory/SubCategoryContext";

const AddSubCategory = () => {
    const subCategoryContext = useContext(SubCategoryContext);
    const {
        submitHandler,
        subCategoryForm,
        handleChange,
        errors,
        menuChangeFunctions,
        menu,
        category,
        clearFrom
    } = subCategoryContext;
    return (
        <form onSubmit={submitHandler}>
            <div
                className="modal fade"
                id="add_modal"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5
                                className="modal-title"
                                id="exampleModalLongLabel"
                            >
                                Add Sub Category
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-sm-12 mt-3 text-center">
                                        <img
                                            className="custom-icon rounded-circle"
                                            src={
                                                !subCategoryForm.sub_category_icon
                                                    ? "backend_assets/img/menu-icon.png"
                                                    : subCategoryForm.sub_category_icon
                                            }
                                        />
                                        <span className="text-danger" />
                                    </div>
                                    <div className="col-md-9 col-sm-12 ">
                                        <div className="form-group">
                                            <label className="col-lg-6 control-label">
                                                Sub Category Icon:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="file"
                                                    name="sub_category_icon"
                                                    className="form-control"
                                                    value=""
                                                    placeholder="Enter SubCategory Icon"
                                                    onChange={handleChange}
                                                />
                                                <span className="text-danger">
                                                    {errors.sub_category_icon}
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
                                                    value={
                                                        subCategoryForm.menu_id
                                                    }
                                                    className="form-control"
                                                    onChange={e =>
                                                        menuChangeFunctions(e)
                                                    }
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
                                        <div className="form-group">
                                            <label className="col-lg-6 control-label">
                                                Category:
                                            </label>
                                            <div className="col-lg-12">
                                                <select
                                                    name="category_id"
                                                    className="form-control"
                                                    value={
                                                        subCategoryForm.category_id
                                                    }
                                                    onChange={handleChange}
                                                >
                                                    <option
                                                        value
                                                        defaultValue
                                                        hidden
                                                    >
                                                        --Select One--
                                                    </option>
                                                    {category.map(
                                                        (category, i) => (
                                                            <option
                                                                key={i}
                                                                value={
                                                                    category.category_id
                                                                }
                                                            >
                                                                {
                                                                    category.category_name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <span className="text-danger">
                                                    {errors.category_id}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Sub Category Name:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="sub_category_name"
                                                    placeholder="Enter Sub Category Name"
                                                    onChange={handleChange}
                                                    value={
                                                        subCategoryForm.sub_category_name
                                                    }
                                                />
                                                <span className="text-danger">
                                                    {errors.sub_category_name}
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
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default React.memo(AddSubCategory);
