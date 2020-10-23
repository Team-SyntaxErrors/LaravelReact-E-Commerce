import "./SubCategory.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import Pagination from "react-js-pagination";
import useForms from "../customHooks/useForms";

const SubCategory = () => {
    const [SubCategoryList, setSubCategoryList] = useState([]);
    const [Search, setSearch] = useState("");
    const [Current_row, setCurrent_row] = useState(8);
    const [page, setPage] = useState("");
    const [select_row, setSelectRow] = useState([8, 10, 20, 30, 40, 50]);
    const [activePage, setActivePage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(8);
    const [totalItemsCount, setTotalItemsCount] = useState(450);

    const [Errors, setErrors] = useState([]);

    const [Menu, setMenu] = useState([]);
    const [Category, setCategory] = useState([]);
    const [SubCategoryForm, handleChange] = useForms({
        menu_id: "",
        category_id: "",
        sub_category_name: "",
        sub_category_icon: ""
    });

    const [EditForm, EditHandleChange, setEditForm] = useForms({
        menu_id: "",
        category_id: "",
        sub_category_name: "",
        sub_category_icon: ""
    });

    const handlePageChange = pageNumber => {
        setPage(pageNumber);
    };

    const MenuChangeFunctions = e => {
        handleChange(e);
        GetCategory(e.target.value);
    };

    // Sub Category List
    const GetSubCategoryList = () => {
        const main_url = `sub_category?q=${Search}&row=${Current_row}&page=${page}`;

        Axios.get(main_url)
            .then(response => {
                setSubCategoryList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setItemsCountPerPage(parseInt(response.data.data.per_page));
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        GetSubCategoryList();
        return () => {
            setSubCategoryList([]);
        };
    }, [Search, Current_row, page]);
    // Sub Category List

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
    // Menu Data Get

    // Category Data Get
    const GetCategory = menu_id => {
        Axios.get("/all_category_get/" + menu_id)
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    // Category Data Get

    // Image Render
    const onImageChangeHandler = e => {
        let files = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            setSubCategoryForm({
                ...SubCategoryForm,
                sub_category_icon: e.target.result
            });
        };
        reader.readAsDataURL(files);
    };
    // Image Render

    // Edit Image render
    const onEditImageChangeHandler = e => {
        let files = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            setEditForm({
                ...EditForm,
                sub_category_icon: e.target.result
            });
        };
        reader.readAsDataURL(files);
    };
    // Edit Image render

    // Form Submit Handler
    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/sub_category", SubCategoryForm)
            .then(response => {
                console.log(response);
                $(".close").click();
                GetSubCategoryList();
                ClearFrom();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };
    // Form Submit Handler

    // Delete Handler
    const DeleteHandler = id => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/sub_category/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Sub Category Has been Deleted",
                                "success"
                            );
                        } else {
                            swal("Opps", "Something Went Wrong", "warning");
                        }
                        GetSubCategoryList();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };
    // Delete Handler

    // Edit Data Get Handler
    const EditHandler = (id, data, index) => {
        SubCategoryList.sub_category_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm(value);
        GetCategory(value.menu_id);
    };
    // Edit Data Get Handler

    // Update Form Submit Handler
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/sub_category/" + EditForm.sub_category_id, EditForm)
            .then(response => {
                $(".close").click();
                GetSubCategoryList();
                ClearFrom();
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };
    // Update Form Submit Handler

    // Change Status Handler
    const ChangeStatus = id => {
        Axios.get("/sub_category/status/" + id)
            .then(response => {
                if (response.status === 200) {
                    swal(
                        "Status!",
                        "Sub Category status has been changed",
                        "success"
                    );
                    GetSubCategoryList();
                } else {
                    swal("Opps", "Something Went Wrong", "warning");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    // Change Status Handler

    // Clear From
    const ClearFrom = () => {
        setErrors([]);
        let FORM = SubCategoryForm;
        Object.keys(FORM).forEach(function(key, index) {
            FORM[key] = "";
        });
    };
    // Clear From

    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <div
                    className="modal fade"
                    id="add_modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-dark">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongLabel"
                                >
                                    Add Sub Category
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">X</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 mt-3 text-center">
                                            <img
                                                className="custom-icon rounded-circle"
                                                src={
                                                    !SubCategoryForm.sub_category_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : SubCategoryForm.sub_category_icon
                                                }
                                            />
                                            <span className="text-danger" />
                                        </div>
                                        <div className="col-md-9 col-sm-12 ">
                                            <div className="form-group">
                                                <label className="col-lg-6 control-label">
                                                    Sub Category Icon:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="file"
                                                        name="sub_category_icon"
                                                        className="form-control"
                                                        placeholder="Enter SubCategory Icon"
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            Errors.sub_category_icon
                                                        }
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
                                                        onChange={e =>
                                                            MenuChangeFunctions(
                                                                e
                                                            )
                                                        }
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
                                            <div className="form-group">
                                                <label className="col-lg-6 control-label">
                                                    Category:
                                                </label>
                                                <div className="col-lg-12">
                                                    <select
                                                        name="category_id"
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
                                                        {Category.map(
                                                            (category, i) => (
                                                                <option
                                                                    key={i}
                                                                    value={
                                                                        category.category_id
                                                                    }
                                                                >
                                                                    {
                                                                        category.category_name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    <span className="text-danger">
                                                        {Errors.category_id}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Sub Category Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="sub_category_name"
                                                        placeholder="Enter Sub Category Name"
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            Errors.sub_category_name
                                                        }
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
                                    Save
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
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-dark">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongLabel"
                                >
                                    Edit Sub Category
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">X</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 mt-3 text-center">
                                            <img
                                                className="custom-icon rounded-circle"
                                                src={
                                                    !EditForm.sub_category_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : EditForm.sub_category_icon
                                                }
                                            />
                                            <span className="text-danger" />
                                        </div>
                                        <div className="col-md-9 col-sm-12 ">
                                            <div className="form-group">
                                                <label className="col-lg-6 control-label">
                                                    Sub Category Icon:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="sub_category_icon"
                                                        placeholder="Enter SubCategory Icon"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            Errors.sub_category_icon
                                                        }
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
                                            <div className="form-group">
                                                <label className="col-lg-6 control-label">
                                                    Category:
                                                </label>
                                                <div className="col-lg-12">
                                                    <select
                                                        className="form-control"
                                                        name="category_id"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.category_id
                                                        }
                                                    >
                                                        <option
                                                            value
                                                            defaultValue
                                                            hidden
                                                        >
                                                            --Select One--
                                                        </option>
                                                        {Category.map(
                                                            (category, i) => (
                                                                <option
                                                                    key={i}
                                                                    value={
                                                                        category.category_id
                                                                    }
                                                                >
                                                                    {
                                                                        category.category_name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    <span className="text-danger">
                                                        {Errors.category_id}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Sub Category Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="sub_category_name"
                                                        placeholder="Enter Sub Category Name"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.sub_category_name
                                                        }
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            Errors.sub_category_name
                                                        }
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

            <div className="card">
                <div className="card-header d-block">
                    <h3>Sub Category List</h3>
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
                                                    setCurrent_row(
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
                                                value={Search}
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
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th
                                                    className="custom-head text-center"
                                                    style={{ width: "15%" }}
                                                >
                                                    Sub Category Icon
                                                </th>
                                                <th className="text-center">
                                                    Sub Category Name
                                                </th>
                                                <th className="text-center">
                                                    Sub Category Slug
                                                </th>
                                                <th className="text-center">
                                                    Menu Name
                                                </th>
                                                <th className="text-center">
                                                    Category Name
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
                                            {SubCategoryList.map(
                                                (subCategory, i) => (
                                                    <tr key={i}>
                                                        <td className="text-center">
                                                            <img
                                                                className="image-list rounded-circle"
                                                                src={
                                                                    subCategory.sub_category_icon
                                                                }
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                subCategory.sub_category_name
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                subCategory.sub_category_slug
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            {subCategory.menus
                                                                ? subCategory
                                                                      .menus
                                                                      .menu_name
                                                                : "Null"}
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                subCategory
                                                                    .categories
                                                                    .category_name
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            <center>
                                                                <div
                                                                    className={
                                                                        subCategory.status ==
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
                                                                    subCategory.status ==
                                                                    1
                                                                        ? "ik ik-repeat f-16 mr-15 text-green"
                                                                        : "ik ik-repeat f-16 mr-15 text-red"
                                                                }
                                                                onClick={() =>
                                                                    ChangeStatus(
                                                                        subCategory.sub_category_id
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i
                                                                className="ik ik-edit f-16 mr-15 text-blue"
                                                                data-toggle="modal"
                                                                data-target="#edit_modal"
                                                                onClick={() =>
                                                                    EditHandler(
                                                                        subCategory.sub_category_id,
                                                                        subCategory,
                                                                        i
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i
                                                                className="ik ik-trash-2 f-16 text-red"
                                                                onClick={() =>
                                                                    DeleteHandler(
                                                                        subCategory.sub_category_id
                                                                    )
                                                                }
                                                            ></i>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                            {totalItemsCount === 0 && (
                                                <tr>
                                                    <td
                                                        colSpan="7"
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
                                                    Sub Category Icon
                                                </th>
                                                <th className="text-center">
                                                    Sub Category Name
                                                </th>
                                                <th className="text-center">
                                                    Sub Category Slug
                                                </th>
                                                <th className="text-center">
                                                    Menu Name
                                                </th>
                                                <th className="text-center">
                                                    Category Name
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
                                    {Current_row >= totalItemsCount ? (
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

export default SubCategory;
