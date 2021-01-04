import "./Category.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import Axios from "axios";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import swal from "sweetalert";
import { toast } from "react-toastify";
import useForms from "../customHooks/useForms";
import CustomPagination from "../helpers/pagination/CustomPagination";

const Category = props => {
    const select_row = [8, 10, 20, 30, 40, 50];
    const [categoryList, setCategoryList] = useState([]);
    const [Menu, setMenu] = useState([]);
    const [Errors, setErrors] = useState([]);
    const [search, setSearch] = useState("");
    const [current_row, setCurrentRaw] = useState(8);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(450);
    const [category_form, setCategoryForm, handleChange] = useForms({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });
    const [EditForm, setEditForm, EditHandleChange] = useForms({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });

    useEffect(() => {
        getAllMenu();
    }, []);

    useEffect(() => {
        getCategories();

        return () => {
            setCategoryList([]);
        };
    }, [current_row, search]);

    /**
     * Get all active menu.
     */
    const getAllMenu = () => {
        Axios.get("/all_menu_get")
            .then(response => {
                setMenu(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Get all category.
     */
    const getCategories = (page = 1) => {
        const main_url = `category?q=${search}&row=${current_row}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setCategoryList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Clear form function.
     * Clear state value.
     */
    const clearFrom = () => {
        setErrors([]);
        let form = category_form;
        console.log("form", form);
        Object.keys(form).forEach(function(key) {
            form[key] = "";
        });
        setCategoryForm({ ...category_form, ...form });
    };

    /**
     * This function store category data.
     *
     * @param {object} e Use for with out reload data submit.
     */
    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/category", category_form)
            .then(response => {
                if (response.data.code === 201) {
                    $(".close").click();
                    getCategories();
                    clearFrom();
                    toast.success("Category Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    /**
     * Category delete function.
     *
     * @param {int} id
     * @param {int} index
     */
    const deleteHandler = (id, index) => {
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
                            let list = [...categoryList];
                            list.splice(index, 1);
                            setCategoryList(list);
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

    /**
     * Category edit value function.
     * Set edit value in state.
     *
     * @param {int} id
     * @param {object} data
     */
    const editHandler = (id, data) => {
        categoryList.category_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm({ ...EditForm, ...value });
    };

    /**
     * This function update category data.
     *
     * @param {object} e
     */
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/category/" + EditForm.category_id, EditForm)
            .then(response => {
                if (response.data.code === 201) {
                    $(".close").click();
                    getCategories();
                    clearFrom();
                    toast.success("Category Data Update Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    /**
     * Category status change function.
     *
     * @param {int} id
     */
    const changeStatus = id => {
        Axios.get("/category/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This category is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This category is inactive successfully!");
                }
                getCategories();
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
                                                        value=""
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
                                                        value={
                                                            category_form.menu_id
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
                    <h3>Category List</h3>
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
                                                    Category Icon
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
                                            {categoryList.map(
                                                (category_data, i) => (
                                                    <tr key={i}>
                                                        <td className="text-center">
                                                            <img
                                                                className="image-list rounded-circle"
                                                                src={
                                                                    category_data.category_icon
                                                                }
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {category_data.menus
                                                                ? category_data
                                                                      .menus
                                                                      .menu_name
                                                                : "Null"}
                                                        </td>
                                                        <td className="text-center">
                                                            {
                                                                category_data.category_name
                                                            }
                                                        </td>
                                                        <td className="text-center">
                                                            <center>
                                                                <div
                                                                    className={
                                                                        category_data.status ==
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
                                                                    category_data.status ==
                                                                    1
                                                                        ? "ik ik-repeat f-16 mr-15 text-green"
                                                                        : "ik ik-repeat f-16 mr-15 text-red"
                                                                }
                                                                onClick={() =>
                                                                    changeStatus(
                                                                        category_data.category_id
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i
                                                                className="ik ik-edit f-16 mr-15 text-blue"
                                                                data-toggle="modal"
                                                                data-target="#edit_modal"
                                                                onClick={() =>
                                                                    editHandler(
                                                                        category_data.category_id,
                                                                        category_data,
                                                                        i
                                                                    )
                                                                }
                                                            ></i>{" "}
                                                            <i
                                                                className="ik ik-trash-2 f-16 text-red"
                                                                onClick={() =>
                                                                    deleteHandler(
                                                                        category_data.category_id,
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
                                                        colSpan="5"
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
                                    {totalItemsCount >= current_row && (
                                        <CustomPagination
                                            activePage={activePage}
                                            totalItems={totalItemsCount}
                                            getFunction={getCategories}
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

export default Category;
