import "./Menu.css";

import React, { useState } from "react";

import Axios from "axios";

const Menu = () => {
    const [menu_name, setMenuName] = useState("");
    const [menu_icon, setMenuIcon] = useState("");

    const onImageChangeHandler = e => {
        let files = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            setMenuIcon(e.target.result);
        };
        reader.readAsDataURL(files);
    };

    const submitHandler = e => {
        e.preventDefault();
        const data = { menu_name, menu_icon };
        Axios.post("/menu", data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <button
                style={{ float: "right" }}
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#add_modal"
            >
                <i class="ik ik-clipboard"></i>
                Add new
            </button>
            <form onSubmit={submitHandler}>
                <div
                    className="modal fade"
                    id="add_modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLongLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongLabel"
                                >
                                    Add Menu
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
                                    <label className="col-lg-3 control-label">
                                        Menu Name:
                                    </label>
                                    <div className="col-lg-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={e =>
                                                setMenuName(e.target.value)
                                            }
                                            value={menu_name}
                                            placeholder="Enter Menu Name"
                                        />
                                        <span className="text-danger" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-lg-3 control-label">
                                        Menu Icon:
                                    </label>
                                    <div className="col-lg-9">
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={onImageChangeHandler}
                                            placeholder="Enter Menu Icon"
                                        />
                                        <span className="text-danger" />
                                    </div>
                                    <div className="col-lg-9">
                                        <img class="icon" src={menu_icon} />
                                        <span className="text-danger" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Menu;
