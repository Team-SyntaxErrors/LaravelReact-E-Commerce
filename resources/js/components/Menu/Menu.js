import "./Menu.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import Pagination from "react-js-pagination";
import swal from "sweetalert";

const Menu = () => {
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
        const main_url =
            "menu?q=" + search + "&row=" + current_row + "&page=" + page;
        Axios.get(main_url)
            .then(response => {
                setMenuList(response.data.data);
                setActivePage(response.data.meta.current_page);
                setItemsCountPerPage(response.data.meta.per_page);
                setTotalItemsCount(response.data.meta.total);
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
                // console.log(response);
                $("#edit_close").click();
                GetMenuList();
                ClearFrom();
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
                onClick={ClearFrom}
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
                                                <th className="custom-head">
                                                    Menu Icon
                                                </th>
                                                <th>Menu Name</th>
                                                <th>Menu Slug</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {menu_list.map((menu, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <img
                                                            className="image-list rounded-circle"
                                                            src={menu.menu_icon}
                                                        />
                                                    </td>
                                                    <td>{menu.menu_name}</td>
                                                    <td>{menu.menu_slug}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-icon btn btn-danger"
                                                            onClick={() =>
                                                                DeleteHandler(
                                                                    menu.menu_id
                                                                )
                                                            }
                                                        >
                                                            <i className="ik ik-trash"></i>
                                                        </button>{" "}
                                                        <button
                                                            className="btn btn-icon btn btn-dark"
                                                            data-toggle="modal"
                                                            data-target="#edit_modal"
                                                            onClick={() =>
                                                                EditHandler(
                                                                    menu.menu_id,
                                                                    menu,
                                                                    i
                                                                )
                                                            }
                                                        >
                                                            <i className="ik ik-edit-2"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Menu Icon</th>
                                                <th>Menu Name</th>
                                                <th>Menu Slug</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5"></div>
                                <div className="col-sm-12 col-md-7">
                                    <nav aria-label="Page navigation example">
                                        <Pagination
                                            itemClass="paginate_button page-item"
                                            linkClass="page-link"
                                            activePage={activePage}
                                            itemsCountPerPage={
                                                itemsCountPerPage
                                            }
                                            totalItemsCount={totalItemsCount}
                                            pageRangeDisplayed={3}
                                            onChange={handlePageChange}
                                        />
                                    </nav>
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
