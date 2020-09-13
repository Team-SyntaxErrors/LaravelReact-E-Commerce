import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";

const Category = () => {
    const [Menu, setMenu] = useState([]);
    const [category_form, setCategory_form] = useState({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });
    const [Errors, setErrors] = useState([]);

    const GetMenu = () => {
        Axios.get("/all_menu_get")
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        GetMenu();
    }, []);

    const onImageChangeHandler = e => {
        let files = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            setCategory_form({
                ...category_form,
                category_icon: e.target.result
            });
        };
        reader.readAsDataURL(files);
    };

    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/category", category_form)
            .then(response => {
                console.log(response);
                $("#close").click();
                // GetMenuList();
                // ClearFrom();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    return (
        <Fragment>
            <button
                style={{ float: "right" }}
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#add_modal"
                // onClick={ClearFrom}
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
                                                    !category_form.category_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : category_form.category_icon
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
                                                        className="form-control"
                                                        onChange={
                                                            onImageChangeHandler
                                                        }
                                                        placeholder="Enter Menu Icon"
                                                    />
                                                    <span className="text-danger">
                                                        {Errors.category_icon}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-6 control-label">
                                                    Menu:
                                                </label>
                                                <div className="col-lg-12">
                                                    <select
                                                        className="form-control"
                                                        onChange={e =>
                                                            setCategory_form({
                                                                ...category_form,
                                                                menu_id:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                    >
                                                        <option
                                                            value
                                                            selected
                                                            hidden
                                                        >
                                                            --Select One--
                                                        </option>
                                                        {Menu.map((menu, i) => (
                                                            <option
                                                                key={i}
                                                                value={
                                                                    menu.menu_id
                                                                }
                                                            >
                                                                {menu.menu_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <span className="text-danger">
                                                        {Errors.menu_id}
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
                                                        className="form-control"
                                                        onChange={e =>
                                                            setCategory_form({
                                                                ...category_form,
                                                                category_name:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                        value={
                                                            category_form.category_name
                                                        }
                                                        placeholder="Enter Menu Name"
                                                    />
                                                    <span className="text-danger">
                                                        {Errors.category_name}
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
                                    id="close"
                                    data-dismiss="modal"
                                    // onClick={ClearFrom}
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
            <br />
            <br />
            <br />
        </Fragment>
    );
};

export default Category;
