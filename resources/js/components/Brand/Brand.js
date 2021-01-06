import "./Brand.css";
import "react-toastify/dist/ReactToastify.css";

import React, { Fragment, useEffect, useState, useRef } from "react";

import Axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import Pagination from "react-js-pagination";
import swal from "sweetalert";
import { toast } from "react-toastify";
import useForms from "../customHooks/useForms";
import ClearForm from "../helpers/clearForm/ClearForm";
import CustomPagination from "../helpers/pagination/CustomPagination";

const Brand = props => {
    const [Brand, setBrand] = useState([]);
    const [BrandList, setBrandList] = useState([]);
    const [search, setSearch] = useState("");
    const select_row = [10, 20, 30, 40, 50, 100];
    const [current_raw, setCurrentRaw] = useState(10);
    const [page, setPage] = useState(1);
    const [error, setErrors] = useState([]);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);

    const [brand_form, setBrandFrom, handleChange] = useForms({
        brand_name: "",
        contact_person: "",
        phone_number: "",
        brand_address: "",
        brand_logo: "",
        status: 1
    });
    const [EditForm, setEditForm, EditHandleChange] = useForms({
        brand_name: "",
        contact_person: "",
        phone_number: "",
        brand_address: "",
        brand_logo: "",
        status: 1
    });

    const handlePageChange = pageNumber => {
        setPage(pageNumber);
    };

    /**
     * Clear form function.
     * Clear state value.
     */
    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(brand_form);
        setBrandFrom({ ...brand_form, ...form });
    };

    // Brand List Get
    const GetBrandList = (page = 1) => {
        const main_url = `brands?q=${search}&row=${current_raw}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setBrandList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetBrandList();
        return () => {
            setBrandList([]);
        };
    }, [current_raw, search, page]);

    // Data Submit
    const onAddSubmit = e => {
        e.preventDefault();
        Axios.post("/brands", brand_form)
            .then(response => {
                $(".close").click();
                GetBrandList();
                clearFrom();
                toast.success("Brand Data Inserted Successfully!");
            })
            .catch(error => {
                if (error.response) {
                    setErrors(error.response.data.errors);
                }
            });
        // if (simpleValidator.current.allValid()) {
        //     Axios.post("/brands", brand_form)
        //         .then(response => {
        //             $(".close").click();
        //             GetBrandList();
        //             clearFrom();
        //             toast.success("Brand Data Inserted Successfully!");
        //         })
        //         .catch(error => {
        //             if (error.response) {
        //                 setErrors(error.response.data.errors);
        //             }
        //         });
        // } else {
        //     setErrors(simpleValidator.current.errorMessages);
        // }
    };

    // Brand Delete
    const DeleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/brands/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            GetBrandList();
                            swal(
                                "Deleted!",
                                "Brand Has been Deleted",
                                "success"
                            );
                        } else {
                            swal("Opps", "Something Went Wrong", "warning");
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
    // Brand Status Change
    const ChangeStatus = id => {
        Axios.get("/brands/status/" + id)
            .then(response => {
                console.log(response);
                if (response.data.code === 200) {
                    toast.success("This brand is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This Brand is inactive successfully!");
                }
                GetBrandList();
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Brand Edit
    const EditHandler = (id, data, index) => {
        BrandList.brand_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm(value);
    };
    // Category Data Update
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/brands/" + EditForm.brand_id, EditForm)
            .then(response => {
                $(".close").click();
                GetBrandList();
                toast.success("Brand Data Update Successfully!");
            })
            .catch(error => {
                if (error.response) {
                    setErrors(error.response.data.errors);
                }
            });
        // if (simpleValidator.current.allValid()) {
        //     Axios.put("/brands/" + EditForm.brand_id, EditForm)
        //         .then(response => {
        //             $(".close").click();
        //             GetBrandList();
        //             ClearFrom();
        //             toast.success("Brand Data Update Successfully!");
        //         })
        //         .catch(error => {
        //             if (error.response) {
        //                 setErrors(error.response.data.errors);
        //             }
        //         });
        // } else {
        //     setErrors(simpleValidator.current.errorMessages);
        // }
    };

    return (
        <Fragment>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <form onSubmit={onAddSubmit}>
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
                                    Add Brand
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
                                        <div className="col-md-12 col-sm-12 ">
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="brand_name"
                                                        placeholder="Enter Brand Name"
                                                        onChange={handleChange}
                                                        value={
                                                            brand_form.brand_name
                                                        }
                                                    />
                                                    {simpleValidator.current.message(
                                                        "brand_name",
                                                        brand_form.brand_name,
                                                        "required"
                                                    )}
                                                    <span className="text-danger">
                                                        {error.brand_name}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Contact Person:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="contact_person"
                                                        placeholder="Enter Brand Contact Person"
                                                        onChange={handleChange}
                                                        value={
                                                            brand_form.contact_person
                                                        }
                                                    />
                                                    {simpleValidator.current.message(
                                                        "contact_person",
                                                        brand_form.contact_person,
                                                        "required"
                                                    )}
                                                    <span className="text-danger">
                                                        {error.contact_person}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Contact Number:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="phone_number"
                                                        placeholder="Enter Brand Phone Number"
                                                        onChange={handleChange}
                                                        value={
                                                            brand_form.phone_number
                                                        }
                                                    />
                                                    {simpleValidator.current.message(
                                                        "phone_number",
                                                        brand_form.phone_number,
                                                        "required"
                                                    )}
                                                    <span className="text-danger">
                                                        {error.phone_number}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Address:
                                                </label>
                                                <div className="col-lg-12">
                                                    <textarea
                                                        type="text"
                                                        className="form-control"
                                                        name="brand_address"
                                                        placeholder="Enter Brand Address"
                                                        onChange={handleChange}
                                                        value={
                                                            brand_form.brand_address
                                                        }
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 mt-3 text-center">
                                                <img
                                                    className="custom-icon rounded-circle"
                                                    src={
                                                        !brand_form.brand_logo
                                                            ? "backend_assets/img/menu-icon.png"
                                                            : brand_form.brand_logo
                                                    }
                                                />
                                                <span className="text-danger" />
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Logo:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="brand_logo"
                                                        onChange={handleChange}
                                                    />
                                                    {/* <span className="text-danger">
                                                        {errors.brand_logo &&
                                                            "Brand logo is required"}
                                                    </span>
                                                    <span className="text-danger">
                                                        {error.brand_logo}
                                                    </span> */}
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Status:
                                                </label>
                                                <div className="col-lg-12">
                                                    <select
                                                        className="form-control"
                                                        name="status"
                                                        onChange={handleChange}
                                                        value={
                                                            brand_form.status
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            defaultValue
                                                            hidden
                                                        >
                                                            --Select--
                                                        </option>
                                                        <option value="1">
                                                            Active
                                                        </option>
                                                        <option value="0">
                                                            Inactive
                                                        </option>
                                                    </select>
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
                                    Edit Brand
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
                                        <div className="col-md-12 col-sm-12 ">
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="brand_name"
                                                        placeholder="Enter Brand Name"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.brand_name
                                                        }
                                                    />
                                                    {simpleValidator.current.message(
                                                        "brand_name",
                                                        EditForm.brand_name,
                                                        "required"
                                                    )}
                                                    <span className="text-danger">
                                                        {error.brand_name}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Contact Person:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="contact_person"
                                                        placeholder="Enter Brand Contact Person"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.contact_person
                                                        }
                                                    />
                                                    {simpleValidator.current.message(
                                                        "contact_person",
                                                        EditForm.contact_person,
                                                        "required"
                                                    )}
                                                    <span className="text-danger">
                                                        {error.contact_person}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Contact Number:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="phone_number"
                                                        placeholder="Enter Brand Phone Number"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.phone_number
                                                        }
                                                    />
                                                    {simpleValidator.current.message(
                                                        "phone_number",
                                                        EditForm.phone_number,
                                                        "required"
                                                    )}
                                                    <span className="text-danger">
                                                        {error.phone_number}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Address:
                                                </label>
                                                <div className="col-lg-12">
                                                    <textarea
                                                        type="text"
                                                        className="form-control"
                                                        name="brand_address"
                                                        placeholder="Enter Brand Address"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            EditForm.brand_address
                                                        }
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12 mt-3 text-center">
                                                <img
                                                    className="custom-icon rounded-circle"
                                                    src={
                                                        !EditForm.brand_logo
                                                            ? "backend_assets/img/menu-icon.png"
                                                            : EditForm.brand_logo
                                                    }
                                                />
                                                <span className="text-danger" />
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Logo:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="brand_logo"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                    />
                                                    {/* <span className="text-danger">
                                                        {errors.brand_logo &&
                                                            "Brand logo is required"}
                                                    </span>
                                                    <span className="text-danger">
                                                        {error.brand_logo}
                                                    </span> */}
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Status:
                                                </label>
                                                <div className="col-lg-12">
                                                    <select
                                                        className="form-control"
                                                        name="status"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={EditForm.status}
                                                    >
                                                        <option
                                                            value=""
                                                            defaultValue
                                                            hidden
                                                        >
                                                            --Select--
                                                        </option>
                                                        <option value="1">
                                                            Active
                                                        </option>
                                                        <option value="0">
                                                            Inactive
                                                        </option>
                                                    </select>
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
                    <h3>Brand List</h3>
                    <button
                        className="btn btn-info table-button"
                        data-toggle="modal"
                        data-target="#add_modal"
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
                                                <th className="text-center">
                                                    Brand Name
                                                </th>
                                                <th
                                                    className="custom-head text-center"
                                                    style={{ width: "15%" }}
                                                >
                                                    Brand Logo
                                                </th>
                                                <th className="text-center">
                                                    Contact Person
                                                </th>
                                                <th className="text-center">
                                                    Phone
                                                </th>
                                                <th className="text-center">
                                                    Brand Address
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
                                            {BrandList.map((brand, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">
                                                        {brand.brand_name}
                                                    </td>
                                                    <td className="text-center">
                                                        <img
                                                            className="image-list rounded-circle"
                                                            src={
                                                                brand.brand_logo
                                                                    ? brand.brand_logo
                                                                    : "backend_assets/img/menu-icon.png"
                                                            }
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        {brand.contact_person}
                                                    </td>
                                                    <td className="text-center">
                                                        {brand.phone_number}
                                                    </td>
                                                    <td className="text-center">
                                                        {brand.brand_address}
                                                    </td>
                                                    <td>
                                                        <center>
                                                            <div
                                                                className={
                                                                    brand.status ==
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
                                                                brand.status ==
                                                                1
                                                                    ? "ik ik-repeat f-16 mr-15 text-green"
                                                                    : "ik ik-repeat f-16 mr-15 text-red"
                                                            }
                                                            onClick={() =>
                                                                ChangeStatus(
                                                                    brand.brand_id
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-edit f-16 mr-15 text-blue"
                                                            data-toggle="modal"
                                                            data-target="#edit_modal"
                                                            onClick={() =>
                                                                EditHandler(
                                                                    brand.brand_id,
                                                                    brand,
                                                                    i
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-trash-2 f-16 text-red"
                                                            onClick={() =>
                                                                DeleteHandler(
                                                                    brand.brand_id
                                                                )
                                                            }
                                                        ></i>
                                                    </td>
                                                </tr>
                                            ))}
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
                                        currentRow={current_raw}
                                        totalItems={totalItemsCount}
                                        getFunction={GetBrandList}
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
export default Brand;
