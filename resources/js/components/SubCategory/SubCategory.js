import "./SubCategory.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import { toast } from "react-toastify";
import useForms from "../customHooks/useForms";
import ClearForm from "../helpers/clearForm/ClearForm";
import CustomPagination from "../helpers/pagination/CustomPagination";

const SubCategory = props => {
    const selectRow = [10, 20, 30, 40, 50];
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [search, setSearch] = useState("");
    const [currentRow, setCurrentRow] = useState(8);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [errors, setErrors] = useState([]);
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategoryForm, setSubCategoryForm, handleChange] = useForms({
        menu_id: "",
        category_id: "",
        sub_category_name: "",
        sub_category_icon: ""
    });

    const [editForm, setEditForm, editHandleChange] = useForms({
        menu_id: "",
        category_id: "",
        sub_category_name: "",
        sub_category_icon: ""
    });

    useEffect(() => {
        getMenu();
    }, []);

    useEffect(() => {
        getSubCategoryList();
        return () => {
            setSubCategoryList([]);
        };
    }, [search, currentRow]);

    const menuChangeFunctions = e => {
        handleChange(e);
        getCategory(e.target.value);
    };

    // Sub Category List
    const getSubCategoryList = (page = 1) => {
        const main_url = `sub_category?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setSubCategoryList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => console.log(error));
    };

    // Menu Data Get
    const getMenu = () => {
        Axios.get("/all_menu_get")
            .then(response => {
                setMenu(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Category Data Get
    const getCategory = menu_id => {
        Axios.get("/category_get/" + menu_id)
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Clear From
    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(subCategoryForm);
        setSubCategoryForm({ ...subCategoryForm, ...form });
    };

    // Form Submit Handler
    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/sub_category", subCategoryForm)
            .then(response => {
                if (response.data.code === 201) {
                    $(".close").click();
                    getSubCategoryList();
                    clearFrom();
                    toast.success("Sub Category Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    // Delete Handler
    const deleteHandler = (id, index) => {
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
                            let list = [...subCategoryList];
                            console.log(list);
                            list.splice(index, 1);
                            setSubCategoryList(list);
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

    // Edit Data Get Handler
    const editHandler = (id, data) => {
        subCategoryList.sub_category_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm(value);
        getCategory(value.menu_id);
    };
    // Edit Data Get Handler

    // Update Form Submit Handler
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/sub_category/" + editForm.sub_category_id, editForm)
            .then(response => {
                if (response.data.code === 201) {
                    $(".close").click();
                    getSubCategoryList();
                    clearFrom();
                    toast.success("Sub Category Data Update Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    // Change Status Handler
    const changeStatus = id => {
        Axios.get("/sub_category/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This sub category is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning(
                        "This sub category is inactive successfully!"
                    );
                }
                getSubCategoryList();
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
                                                    !subCategoryForm.sub_category_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : subCategoryForm.sub_category_icon
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
                                                        value=""
                                                        placeholder="Enter SubCategory Icon"
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            errors.sub_category_icon
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
                                                        value={
                                                            subCategoryForm.menu_id
                                                        }
                                                        className="form-control"
                                                        onChange={e =>
                                                            menuChangeFunctions(
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
                                                        {menu.map((menu, i) => (
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
                                                        {errors.menu_id}
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
                                                        value={
                                                            subCategoryForm.category_id
                                                        }
                                                        onChange={handleChange}
                                                    >
                                                        <option
                                                            value
                                                            defaultValue
                                                            hidden
                                                        >
                                                            --Select One--
                                                        </option>
                                                        {category.map(
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
                                                        {errors.category_id}
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
                                                        value={
                                                            subCategoryForm.sub_category_name
                                                        }
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            errors.sub_category_name
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
                                    onClick={clearFrom}
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
                                                    !editForm.sub_category_icon
                                                        ? "backend_assets/img/menu-icon.png"
                                                        : editForm.sub_category_icon
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
                                                            editHandleChange
                                                        }
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            errors.sub_category_icon
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
                                                            editHandleChange
                                                        }
                                                        value={editForm.menu_id}
                                                    >
                                                        <option
                                                            value
                                                            defaultValue
                                                            hidden
                                                        >
                                                            --Select One--
                                                        </option>
                                                        {menu.map((menu, i) => (
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
                                                        {errors.menu_id}
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
                                                            editHandleChange
                                                        }
                                                        value={
                                                            editForm.category_id
                                                        }
                                                    >
                                                        <option
                                                            value
                                                            defaultValue
                                                            hidden
                                                        >
                                                            --Select One--
                                                        </option>
                                                        {category.map(
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
                                                        {errors.category_id}
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
                                                            editHandleChange
                                                        }
                                                        value={
                                                            editForm.sub_category_name
                                                        }
                                                    />
                                                    <span className="text-danger">
                                                        {
                                                            errors.sub_category_name
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
                    <h3>Sub Category List</h3>
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
                                            {subCategoryList.map(
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
                                                                    changeStatus(
                                                                        subCategory.sub_category_id
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i
                                                                className="ik ik-edit f-16 mr-15 text-blue"
                                                                data-toggle="modal"
                                                                data-target="#edit_modal"
                                                                onClick={() =>
                                                                    editHandler(
                                                                        subCategory.sub_category_id,
                                                                        subCategory
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i
                                                                className="ik ik-trash-2 f-16 text-red"
                                                                onClick={() =>
                                                                    deleteHandler(
                                                                        subCategory.sub_category_id,
                                                                        i
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
                                        getFunction={getSubCategoryList}
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

export default SubCategory;
