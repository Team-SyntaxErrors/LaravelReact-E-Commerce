import React, { useContext } from "react";

import UnitContext from "../../../containers/contexts/unit/UnitContext";

const EditUnit = () => {
    const unitContext = useContext(UnitContext);
    const { updateHandler, EditHandleChange, editForm, error } = unitContext;

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
                                Edit Unit
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
                                                    name="unit_name"
                                                    onChange={EditHandleChange}
                                                    value={editForm.unit_name}
                                                    placeholder="Enter Unit Name"
                                                />
                                                <span className="text-danger">
                                                    {error.unit_name}
                                                </span>
                                            </div>
                                        </div>
                                        <input
                                            name="unit_id"
                                            type="hidden"
                                            value={editForm.unit_id}
                                        />
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Short Name:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="short_name"
                                                    onChange={EditHandleChange}
                                                    value={editForm.short_name}
                                                    placeholder="Enter Unit Short Name"
                                                />
                                                <span className="text-danger">
                                                    {error.short_name}
                                                </span>
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
                                                    value={editForm.status}
                                                >
                                                    <option
                                                        value=""
                                                        defaultValue
                                                        disabled
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
                                                <span className="text-danger">
                                                    {error.status}
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

export default React.memo(EditUnit);
