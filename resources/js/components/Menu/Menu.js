import "./Menu.css";
import "react-toastify/dist/ReactToastify.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import Pagination from "react-js-pagination";
import swal from "sweetalert";
import { toast } from "react-toastify";

const Menu = props => {
    const [menu_id, setMenuId] = useState("");
    const [menu_name, setMenuName] = useState("");
    const [menu_icon, setMenuIcon] = useState("");
    const [search, setSearch] = useState("");
    const [select_row, setSelectRow] = useState([8, 10, 20, 30, 40, 50]);
    const [current_row, setCurrentRaw] = useState(8);
    const [page, setPage] = useState(1);
    const [error, setError] = useState([]);
    const [menu_list, setMenuList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(8);
    const [totalItemsCount, setTotalItemsCount] = useState(450);

    const handlePageChange = pageNumber => {
        setPage(pageNumber);
    };

    const GetMenuList = () => {
        const main_url = `menu?q=${search}&row=${current_row}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setMenuList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setItemsCountPerPage(parseInt(response.data.data.per_page));
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        GetMenuList();
    }, [current_row, search, page]);

    const onImageChangeHandler = e => {
        let files = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            setMenuIcon(e.target.result);
        };
        reader.readAsDataURL(files);
    };

    const ClearFrom = () => {
        setMenuName("");
        setMenuIcon("");
        setError("");
    };

    const submitHandler = e => {
        e.preventDefault();
        const data = { menu_name, menu_icon };
        Axios.post("/menu", data)
            .then(response => {
                // console.log(response);
                $("#close").click();
                GetMenuList();
                ClearFrom();
                toast.success("Menu Data Inserted Successfully!");
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    const DeleteHandler = (id, index) => {
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
                            let list = [...menu_list];
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

    const EditHandler = (id, data, index) => {
        menu_list.menu_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setMenuName(value.menu_name);
        setMenuIcon(value.menu_icon);
        setMenuId(value.menu_id);
    };

    const updateHandler = e => {
        e.preventDefault();
        const data = { menu_name, menu_icon };
        Axios.put("/menu/" + menu_id, data)
            .then(response => {
                $("#edit_close").click();
                GetMenuList();
                ClearFrom();
                toast.success("Menu Data Update Successfully!");
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    const ChangeStatus = id => {
        Axios.get("/menu/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This menu is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This menu is inactive successfully!");
                }
                GetMenuList();
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
                                                    !menu_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : menu_icon
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
                                                        onChange={
                                                            onImageChangeHandler
                                                        }
                                                        placeholder="Enter Menu Icon"
                                                    />
                                                    <span className="text-danger">
                                                        {error.menu_icon}
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
                                                        onChange={e =>
                                                            setMenuName(
                                                                e.target.value
                                                            )
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
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    id="close"
                                    data-dismiss="modal"
                                    onClick={ClearFrom}
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
                                                    !menu_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : menu_icon
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
                                                        onChange={
                                                            onImageChangeHandler
                                                        }
                                                        placeholder="Enter Menu Icon"
                                                    />
                                                    <span className="text-danger">
                                                        {error.menu_icon}
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
                                                        onChange={e =>
                                                            setMenuName(
                                                                e.target.value
                                                            )
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
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    id="edit_close"
                                    data-dismiss="modal"
                                    onClick={ClearFrom}
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
                        onClick={ClearFrom}
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
                                                    setCurrentRaw(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {select_row.map((rows, i) => (
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
                                            {menu_list.map((menu, i) => (
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
                                                                ChangeStatus(
                                                                    menu.menu_id
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-edit f-16 mr-15 text-blue"
                                                            data-toggle="modal"
                                                            data-target="#edit_modal"
                                                            onClick={() =>
                                                                EditHandler(
                                                                    menu.menu_id,
                                                                    menu,
                                                                    i
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-trash-2 f-16 text-red"
                                                            onClick={() =>
                                                                DeleteHandler(
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
                                    {current_row >= totalItemsCount ? (
                                        ""
                                    ) : (
                                        <Pagination
                                            innerClass="btn-group"
                                            linkClass="btn btn-outline-secondary"
                                            activePage={activePage}
                                            itemsCountPerPage={
                                                itemsCountPerPage
                                            }
                                            totalItemsCount={totalItemsCount}
                                            pageRangeDisplayed={3}
                                            onChange={handlePageChange}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Menu;
