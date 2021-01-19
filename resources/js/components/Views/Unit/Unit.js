import "./Unit.css";
import "react-toastify/dist/ReactToastify.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import CustomPagination from "../../helpers/pagination/CustomPagination";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import swal from "sweetalert";
import { toast } from "react-toastify";
import useForms from "../../customHooks/useForms";

const Unit = props => {
    const select_row = [10, 20, 30, 40, 50];
    const [search, setSearch] = useState("");
    const [error, setError] = useState([]);
    const [unitList, setUnitList] = useState([]);
    const [currentRow, setCurrentRow] = useState(10);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [unitForm, setUnitForm, handleChange] = useForms({
        unit_name: "",
        short_name: "",
        status: ""
    });
    const [editForm, setEditForm, EditHandleChange] = useForms({
        unit_name: "",
        short_name: "",
        status: ""
    });

    const getUnitList = (page = 1) => {
        const main_url = `units?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setUnitList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUnitList();
        return () => setUnitList([]);
    }, [currentRow, search]);

    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/units", unitForm)
            .then(response => {
                setError([]);
                getUnitList();
                $("#close").click();
                toast.success("Unit Data Inserted Successfully!");
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
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/units/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Unit Has been Deleted",
                                "success"
                            );
                            getUnitList();
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
        unitList.unit_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm({ ...editForm, ...value });
    };

    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/units/" + editForm.unit_id, editForm)
            .then(response => {
                getUnitList();
                $("#edit_close").click();
                setError([]);
                toast.success("Unit Data Update Successfully!");
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    const ChangeStatus = id => {
        Axios.get("/units/" + id)
            .then(response => {
                console.log(response);
                if (response.data.code === 200) {
                    toast.success("This unit is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This unit is inactive successfully!");
                }
                getUnitList();
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
                                    Add Unit
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
                                                        name="unit_name"
                                                        onChange={handleChange}
                                                        placeholder="Enter Unit Name"
                                                    />
                                                    <span className="text-danger">
                                                        {error.unit_name}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Short Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="short_name"
                                                        onChange={handleChange}
                                                        placeholder="Enter Unit Short Name"
                                                    />
                                                    <span className="text-danger">
                                                        {error.short_name}
                                                    </span>
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
                                                    <span className="text-danger">
                                                        {error.status}
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
                                    Edit Unit
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
                                                        name="unit_name"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            editForm.unit_name
                                                        }
                                                        placeholder="Enter Unit Name"
                                                    />
                                                    <span className="text-danger">
                                                        {error.unit_name}
                                                    </span>
                                                </div>
                                            </div>
                                            <input
                                                name="unit_id"
                                                type="hidden"
                                                value={editForm.unit_id}
                                            />
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Short Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="short_name"
                                                        onChange={
                                                            EditHandleChange
                                                        }
                                                        value={
                                                            editForm.short_name
                                                        }
                                                        placeholder="Enter Unit Short Name"
                                                    />
                                                    <span className="text-danger">
                                                        {error.short_name}
                                                    </span>
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
                                                        value={editForm.status}
                                                    >
                                                        <option
                                                            value=""
                                                            defaultValue
                                                            disabled
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
                                                    <span className="text-danger">
                                                        {error.status}
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
                    <h3>Unit List</h3>
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
                                                    setCurrentRow(
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
                                                    Unit Name
                                                </th>
                                                <th className="text-center">
                                                    Unit Short Name
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
                                            {unitList.map((unit, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">
                                                        {unit.unit_name}
                                                    </td>
                                                    <td className="text-center">
                                                        {unit.short_name}
                                                    </td>
                                                    <td>
                                                        <center>
                                                            <div
                                                                className={
                                                                    unit.status ==
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
                                                                unit.status == 1
                                                                    ? "ik ik-repeat f-16 mr-15 text-green"
                                                                    : "ik ik-repeat f-16 mr-15 text-red"
                                                            }
                                                            onClick={() =>
                                                                ChangeStatus(
                                                                    unit.unit_id
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-edit f-16 mr-15 text-blue"
                                                            data-toggle="modal"
                                                            data-target="#edit_modal"
                                                            onClick={() =>
                                                                editHandler(
                                                                    unit.unit_id,
                                                                    unit,
                                                                    i
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <i
                                                            className="ik ik-trash-2 f-16 text-red"
                                                            onClick={() =>
                                                                DeleteHandler(
                                                                    unit.unit_id
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
                                        getFunction={getUnitList}
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

export default React.memo(Unit);
