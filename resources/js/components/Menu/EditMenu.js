import React, { useContext } from "react";

import MenuContext from "../../containers/contexts/menu/MenuContext";

const EditMenu = () => {
    const menuContext = useContext(MenuContext);
    const {
        updateHandler,
        editMenu,
        editHandlerChange,
        errors,
        clearFrom
    } = menuContext;
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
                                Edit Menu
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
                                    <div className="col-md-3 col-sm-12 mt-3 text-center">
                                        <img
                                            className="custom-icon rounded-circle"
                                            src={
                                                !editMenu.menu_icon
                                                    ? "backend_assets/img/menu-icon.png"
                                                    : editMenu.menu_icon
                                            }
                                        />
                                        <span className="text-danger" />
                                    </div>
                                    <div className="col-md-9 col-sm-12 ">
                                        <div className="form-group">
                                            <label className="col-lg-6 control-label">
                                                Menu Icon:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    placeholder="Enter Menu Icon"
                                                    name="menu_icon"
                                                    onChange={editHandlerChange}
                                                />
                                                <span className="text-danger">
                                                    {errors.menu_icon}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <label className="col-lg-6 control-label">
                                                Menu Name:
                                            </label>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Menu Name"
                                                    name="menu_name"
                                                    onChange={editHandlerChange}
                                                    value={editMenu.menu_name}
                                                />
                                                <span className="text-danger">
                                                    {errors.menu_name}
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

export default React.memo(EditMenu);
