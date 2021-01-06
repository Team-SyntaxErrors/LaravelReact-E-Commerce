import "./Menu.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import swal from "sweetalert";
import { toast } from "react-toastify";
import CustomPagination from "../helpers/pagination/CustomPagination";
import useForms from "../customHooks/useForms";
import ClearForm from "../helpers/clearForm/ClearForm";

const Menu = props => {
    const selectRow = [10, 20, 30, 40, 50];
    const [menu_id, setMenuId] = useState("");
    const [menu_name, setMenuName] = useState("");
    const [menu_icon, setMenuIcon] = useState("");
    const [search, setSearch] = useState("");
    const [currentRow, setCurrentRow] = useState(8);
    const [errors, setErrors] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [menuForm, setMenuForm, handlerChange] = useForms({
        menu_name: "",
        menu_icon: ""
    });
    const [editMenu, setEditMenu, editHandlerChange] = useForms({
        menu_id: "",
        menu_name: "",
        menu_icon: ""
    });

    useEffect(() => {
        getMenuList();
    }, [currentRow, search]);

    const getMenuList = (page = 1) => {
        const main_url = `menu?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setMenuList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(menuForm);
        setMenuForm({ ...menuForm, ...form });
    };

    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/menu", menuForm)
            .then(response => {
                if (response.data.code === 201) {
                    $("#close").click();
                    getMenuList();
                    clearFrom();
                    toast.success("Menu Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    const deleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/menu/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Menu Has been Deleted",
                                "success"
                            );
                            let list = [...menuList];
                            list.splice(index, 1);
                            setMenuList(list);
                        } else {
                            swal("Oops", "Something Went Wrong", "warning");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };

    const editHandler = (id, data) => {
        menuList.menu_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditMenu(value);
    };

    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/menu/" + editMenu.menu_id, editMenu)
            .then(response => {
                if (response.data.code === 201) {
                    $("#edit_close").click();
                    getMenuList();
                    clearFrom();
                    toast.success("Menu Data Update Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    const changeStatus = id => {
        Axios.get("/menu/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This menu is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This menu is inactive successfully!");
                }
                getMenuList();
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <Fragment>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
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
                                    Add Menu
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">
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
                                                    !menuForm.menu_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : menuForm.menu_icon
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
                                                        name="menu_icon"
                                                        onChange={handlerChange}
                                                        placeholder="Enter Menu Icon"
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
                                                        onChange={handlerChange}
                                                        value={
                                                            menuForm.menu_name
                                                        }
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
                                    id="close"
                                    data-dismiss="modal"
                                    onClick={clearFrom}
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
                                                        onChange={
                                                            editHandlerChange
                                                        }
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
                                                        onChange={
                                                            editHandlerChange
                                                        }
                                                        value={
                                                            editMenu.menu_name
                                                        }
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

            <div className="card">
                <div className="card-header d-block">
                    <h3>Menu List</h3>
                    <button
                        className="btn btn-info table-button"
                        data-toggle="modal"
                        data-target="#add_modal"
                        onClick={clearFrom}
                    >
                        <i className="ik ik-clipboard"></i>
                        Add new
                    </button>
                </div>
                <div className="card-body">
                    <div className="dt-responsive">
                        <div
                            id="simpletable_wrapper"
                            className="dataTables_wrapper dt-bootstrap4"
                        >
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div
                                        className="dataTables_length"
                                        id="simpletable_length"
                                    >
                                        <label>
                                            Show
                                            <select
                                                name="simpletable_length"
                                                aria-controls="simpletable"
                                                className="custom-select custom-select-sm form-control form-control-sm"
                                                onChange={e =>
                                                    setCurrentRow(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {selectRow.map((rows, i) => (
                                                    <option
                                                        key={i}
                                                        value={rows}
                                                    >
                                                        {rows}
                                                    </option>
                                                ))}
                                            </select>
                                            entries
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div
                                        id="simpletable_filter"
                                        className="dataTables_filter"
                                    >
                                        <label>
                                            Search:
                                            <input
                                                type="search"
                                                className="form-control form-control-sm"
                                                placeholder="Type to filter..."
                                                aria-controls="simpletable"
                                                onChange={e =>
                                                    setSearch(e.target.value)
                                                }
                                                value={search}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table
                                        id="simpletable"
                                        className="table"
                                        role="grid"
                                        aria-describedby="simpletable_info"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th
                                                    className="custom-head text-center"
                                                    style={{ width: "15%" }}
                                                >
                                                    Menu Icon
                                                </th>
                                                <th className="text-center">
                                                    Menu Name
                                                </th>
                                                <th className="text-center">
                                                    Menu Slug
                                                </th>
                                                <th className="text-center">
                                                    Status
                                                </th>
                                                <th className="text-center">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {menuList.map((menu, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">
                                                        <img
                                                            className="image-list rounded-circle"
                                                            src={menu.menu_icon}
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        {menu.menu_name}
                                                    </td>
                                                    <td className="text-center">
                                                        {menu.menu_slug}
                                                    </td>
                                                    <td>
                                                        <center>
                                                            <div
                                                                className={
                                                                    menu.status ==
                                                                    1
                                                                        ? "p-status bg-green"
                                                                        : "p-status bg-red"
                                                                }
                                                            ></div>
                                                        </center>
                                                    </td>
                                                    <td className="text-center">
                                                        <i
                                                            className={
                                                                menu.status == 1
                                                                    ? "ik ik-repeat f-16 mr-15 text-green"
                                                                    : "ik ik-repeat f-16 mr-15 text-red"
                                                            }
                                                            onClick={() =>
                                                                changeStatus(
                                                                    menu.menu_id
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-edit f-16 mr-15 text-blue"
                                                            data-toggle="modal"
                                                            data-target="#edit_modal"
                                                            onClick={() =>
                                                                editHandler(
                                                                    menu.menu_id,
                                                                    menu
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-trash-2 f-16 text-red"
                                                            onClick={() =>
                                                                deleteHandler(
                                                                    menu.menu_id,
                                                                    i
                                                                )
                                                            }
                                                        ></i>
                                                    </td>
                                                </tr>
                                            ))}
                                            {totalItemsCount === 0 && (
                                                <tr>
                                                    <td
                                                        colSpan="4"
                                                        className="text-center"
                                                    >
                                                        <b>No Data Found</b>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th className="text-center">
                                                    Menu Icon
                                                </th>
                                                <th className="text-center">
                                                    Menu Name
                                                </th>
                                                <th className="text-center">
                                                    Menu Slug
                                                </th>
                                                <th className="text-center">
                                                    Status
                                                </th>
                                                <th className="text-center">
                                                    Action
                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5"></div>
                                <div className="col-sm-12 col-md-7">
                                    <CustomPagination
                                        activePage={activePage}
                                        currentRow={currentRow}
                                        totalItems={totalItemsCount}
                                        getFunction={getMenuList}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default React.memo(Menu);
