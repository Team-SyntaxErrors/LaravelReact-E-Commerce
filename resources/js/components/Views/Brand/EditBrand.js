import React, { useContext } from "react";

import BrandContext from "../../../containers/contexts/brand/BrandContext";

const EditBrand = () => {
    const brandContext = useContext(BrandContext);
    const {
        updateHandler,
        EditHandleChange,
        EditForm,
        simpleValidator,
        error
    } = brandContext;
    return (
        <form onSubmit={updateHandler}>
            <div
                className="modal fade"
                id="edit_modal"
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
                                Edit Brand
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">
                                    {" "}
                                    <i className="ik ik-x"></i>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 ">
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Name:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="brand_name"
                                                    placeholder="Enter Brand Name"
                                                    onChange={EditHandleChange}
                                                    value={EditForm.brand_name}
                                                />
                                                {simpleValidator.current.message(
                                                    "brand_name",
                                                    EditForm.brand_name,
                                                    "required"
                                                )}
                                                <span className="text-danger">
                                                    {error.brand_name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Contact Person:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="contact_person"
                                                    placeholder="Enter Brand Contact Person"
                                                    onChange={EditHandleChange}
                                                    value={
                                                        EditForm.contact_person
                                                    }
                                                />
                                                {simpleValidator.current.message(
                                                    "contact_person",
                                                    EditForm.contact_person,
                                                    "required"
                                                )}
                                                <span className="text-danger">
                                                    {error.contact_person}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Contact Number:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="phone_number"
                                                    placeholder="Enter Brand Phone Number"
                                                    onChange={EditHandleChange}
                                                    value={
                                                        EditForm.phone_number
                                                    }
                                                />
                                                {simpleValidator.current.message(
                                                    "phone_number",
                                                    EditForm.phone_number,
                                                    "required"
                                                )}
                                                <span className="text-danger">
                                                    {error.phone_number}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Address:
                                            </label>
                                            <div className="col-lg-12">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    name="brand_address"
                                                    placeholder="Enter Brand Address"
                                                    onChange={EditHandleChange}
                                                    value={
                                                        EditForm.brand_address
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-12 mt-3 text-center">
                                            <img
                                                className="custom-icon rounded-circle"
                                                src={
                                                    !EditForm.brand_logo
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : EditForm.brand_logo
                                                }
                                            />
                                            <span className="text-danger" />
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Logo:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="brand_logo"
                                                    onChange={EditHandleChange}
                                                />
                                                {/* <span className="text-danger">
                                              {errors.brand_logo &&
                                                  "Brand logo is required"}
                                          </span>
                                          <span className="text-danger">
                                              {error.brand_logo}
                                          </span> */}
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Status:
                                            </label>
                                            <div className="col-lg-12">
                                                <select
                                                    className="form-control"
                                                    name="status"
                                                    onChange={EditHandleChange}
                                                    value={EditForm.status}
                                                >
                                                    <option
                                                        value=""
                                                        defaultValue
                                                        hidden
                                                    >
                                                        --Select--
                                                    </option>
                                                    <option value="1">
                                                        Active
                                                    </option>
                                                    <option value="0">
                                                        Inactive
                                                    </option>
                                                </select>
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
                                id="edit_close"
                                data-dismiss="modal"
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

export default React.memo(EditBrand);
