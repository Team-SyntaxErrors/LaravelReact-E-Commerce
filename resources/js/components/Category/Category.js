import "./Category.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import Pagination from "react-js-pagination";
import swal from "sweetalert";
import useForms from "../customHooks/useForms";

const Category = () => {
    const [Menu, setMenu] = useState([]);
    const [category_form, handleChange] = useForms({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });
    const [Errors, setErrors] = useState([]);
    const [CategoryList, setCategoryList] = useState([]);
    const [search, setSearch] = useState("");
    const [select_row, setSelectRow] = useState([8, 10, 20, 30, 40, 50]);
    const [current_row, setCurrentRaw] = useState(8);
    const [page, setPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(8);
    const [totalItemsCount, setTotalItemsCount] = useState(450);
    const [EditForm, EditHandleChange, setEditForm] = useForms({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });

    const handlePageChange = pageNumber => {
        setPage(pageNumber);
    };
    // Menu Data Get
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
    // Category List Get
    const GetCategoryList = () => {
        const main_url = `category?q=${search}&row=${current_row}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setCategoryList(response.data.data);
                setActivePage(response.data.current_page);
                setItemsCountPerPage(parseInt(response.data.per_page));
                setTotalItemsCount(response.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetCategoryList();
        return () => {
            setCategoryList([]);
        };
    }, [current_row, search, page]);
    // Clear From
    const ClearFrom = () => {
        setErrors([]);
        let FORM = category_form;
        Object.keys(FORM).forEach(function(key, index) {
            FORM[key] = "";
        });
    };
    // Data Submit
    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/category", category_form)
            .then(response => {
                console.log(response);
                $(".close").click();
                GetCategoryList();
                ClearFrom();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };
    // Category Delete
    const DeleteHandler = id => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/category/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Category Has been Deleted",
                                "success"
                            );
                        } else {
                            swal("Opps", "Something Went Wrong", "warning");
                        }
                        GetCategoryList();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };
    //Edit Data Get
    const EditHandler = (id, data, index) => {
        CategoryList.category_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm(value);
    };
    // Category Data Update
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/category/" + EditForm.category_id, EditForm)
            .then(response => {
                $(".close").click();
                GetCategoryList();
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
                                                        name="category_icon"
                                                        className="form-control"
                                                        onChange={handleChange}
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
                                                        name="menu_id"
                                                        className="form-control"
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value
                                                            defaultValue
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
                                                        name="category_name"
                                                        className="form-control"
                                                        onChange={handleChange}
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
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongLabel"
                                >
                                    Edit Category
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
                                                    !EditForm.category_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : EditForm.category_icon
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
                                                        name="category_icon"
                                                        className="form-control"
                                                        onChange={
                                                            EditHandleChange
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
                                                        name="menu_id"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={EditForm.menu_id}
                                                    >
                                                        <option value hidden>
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
                                                        name="category_name"
                                                        className="form-control"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.category_name
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

            <div className="card custom-card">
                <div className="card-header d-block">
                    <h3>Category List</h3>
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
                                                    className="custom-head"
                                                    style={{ width: "15%" }}
                                                >
                                                    Category Icon
                                                </th>
                                                <th>Menu Name</th>
                                                <th>Category Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {CategoryList.map(
                                                (category_data, i) => (
                                                    <tr key={i}>
                                                        <td>
                                                            <img
                                                                className="image-list rounded-circle"
                                                                src={
                                                                    category_data.category_icon
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            {
                                                                category_data.menu_id
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                category_data.category_name
                                                            }
                                                        </td>
                                                        <td>
                                                            <i
                                                                className="ik ik-edit f-16 mr-15 text-blue"
                                                                data-toggle="modal"
                                                                data-target="#edit_modal"
                                                                onClick={() =>
                                                                    EditHandler(
                                                                        category_data.category_id,
                                                                        category_data,
                                                                        i
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i className="ik ik-repeat f-16 mr-15 text-green"></i>{" "}
                                                            <i
                                                                className="ik ik-trash-2 f-16 text-red"
                                                                onClick={() =>
                                                                    DeleteHandler(
                                                                        category_data.category_id
                                                                    )
                                                                }
                                                            ></i>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Category Icon</th>
                                                <th>Category Name</th>
                                                <th>Category Slug</th>
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

export default Category;
