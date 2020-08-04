import "./Menu.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import MenuList from "./MenuList";
import swal from "sweetalert";

const Menu = () => {
    const [menu_id, setMenuId] = useState("");
    const [menu_name, setMenuName] = useState("");
    const [menu_icon, setMenuIcon] = useState("");
    const [error, setError] = useState([]);
    const [menu_list, setMenuList] = useState([]);

    const GetMenuList = () => {
        Axios.get("/menu")
            .then(response => {
                // console.log(response.data.data);
                setMenuList(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        GetMenuList();
    }, []);

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
                $("#close").click();
                GetMenuList();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    const DeleteHandler = id => {
        swal({
            title: "Are you sure?",
            text:
                "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/menu/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal("Deleted!", "Menu Hasbeen Deleted", "success");
                        } else {
                            swal("Opps", "Something Went Wrong", "warning");
                        }
                        GetMenuList();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };

    const EditHandler = id => {
        Axios.get("/menu/edit/" + id)
            .then(response => {
                // console.log(response);
                setMenuName(response.data.menu_name);
                setMenuIcon(response.data.menu_icon);
                setMenuId(response.data.menu_id);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const updateHandler = e => {
        e.preventDefault();
        const data = { menu_name, menu_icon };
        Axios.put("/menu/" + menu_id, data)
            .then(response => {
                console.log(response);
                $("#edit_close").click();
                GetMenuList();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
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
                                    <div className="col-lg-12">
                                        <img className="icon ml-30p" src={!(menu_icon) ? "backend_assets/img/menu-icon.png" : menu_icon} />
                                        <span className="text-danger" />
                                    </div>
                                    <div className="row mt-2">
                                        <label className="col-lg-2 control-label">
                                            Menu Icon:
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={onImageChangeHandler}
                                                placeholder="Enter Menu Icon"
                                            />
                                            <span className="text-danger">
                                                {error.menu_icon}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group ">
                                    <div className="row">
                                        <label className="col-lg-2 control-label">
                                            Menu Name:
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={e =>
                                                    setMenuName(e.target.value)
                                                }
                                                value={menu_name}
                                                placeholder="Enter Menu Name"
                                            />
                                            <span className="text-danger">
                                                {error.menu_name}
                                            </span>
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

            <form onSubmit={updateHandler}>
                <div
                    className="modal fade"
                    id="edit_modal"
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
                                    Edit Menu
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
                                    <div className="col-lg-12 ml-30p">
                                        <img class="icon" src={menu_icon} />
                                        <span className="text-danger" />
                                    </div>
                                    <div className="row mt-2">
                                        <label className="col-lg-2 control-label">
                                            Menu Icon:
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={onImageChangeHandler}
                                                placeholder="Enter Menu Icon"
                                            />
                                            <span className="text-danger">
                                                {error.menu_icon}
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-lg-2 control-label">
                                            Menu Name:
                                        </label>
                                        <div className="col-lg-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={e =>
                                                    setMenuName(e.target.value)
                                                }
                                                value={menu_name}
                                                placeholder="Enter Menu Name"
                                            />
                                            <span className="text-danger">
                                                {error.menu_name}
                                            </span>
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

            <MenuList
                menu_list={menu_list}
                Delete={DeleteHandler}
                Edit={EditHandler}
            />
        </Fragment>
    );
};

export default Menu;
