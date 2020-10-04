import "./Unit.css";

import React, { Fragment, useEffect, useState } from "react";

import Axios from "axios";
import Pagination from "react-js-pagination";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const Unit = () => {
    const [search, setSearch] = useState("");
    const [select_row, setSelectRow] = useState([8, 10, 20, 30, 40, 50]);
    const [current_row, setCurrentRaw] = useState(8);
    const [page, setPage] = useState(1);
    const [error, setError] = useState([]);
    const [unit_list, setUnitList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState(8);
    const [totalItemsCount, setTotalItemsCount] = useState(450);
    const { register, errors, handleSubmit } = useForm();
    const {
        register: register2,
        errors: errors2,
        handleSubmit: handleSubmit2,
        setValue
    } = useForm();

    const handlePageChange = pageNumber => {
        setPage(pageNumber);
    };
    const GetUnitList = () => {
        const main_url = `units?q=${search}&row=${current_row}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setUnitList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setItemsCountPerPage(parseInt(response.data.data.per_page));
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        GetUnitList();
    }, [current_row, search, page]);

    const onAddSubmit = (data, e) => {
        console.log(data);
        Axios.post("/units", data)
            .then(response => {
                e.target.reset();
                setError([]);
                GetUnitList();
                $("#close").click();
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
                            GetUnitList();
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

    const EditHandler = (id, data, index) => {
        unit_list.id = id;
        let value = JSON.parse(JSON.stringify(data));
        Object.entries(value).forEach(([name, value]) => {
            setValue(name, value);
        });
    };

    const onUpdateSubmit = data => {
        console.log(data);
        Axios.put("/units/" + data.unit_id, data)
            .then(response => {
                GetUnitList();
                $("#edit_close").click();
                setError([]);
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
                    swal("Status!", "Unit Status Active", "success");
                    GetUnitList();
                }
                if (response.data.code === 201) {
                    swal("Status!", "Unit Status Inactive", "success");
                    GetUnitList();
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onAddSubmit)}>
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
                                                        ref={register({
                                                            required: true
                                                        })}
                                                        placeholder="Enter Unit Name"
                                                    />
                                                    <span className="text-danger">
                                                        {errors.unit_name &&
                                                            "Unit name is required"}
                                                    </span>
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
                                                        ref={register({
                                                            required: true
                                                        })}
                                                        placeholder="Enter Unit Short Name"
                                                    />
                                                    <span className="text-danger">
                                                        {errors.short_name &&
                                                            "Unit short name is required"}
                                                    </span>
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
                                                        ref={register({
                                                            required: true
                                                        })}
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
                                                        {errors.status &&
                                                            "Select unit status"}
                                                    </span>
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

            <form onSubmit={handleSubmit2(onUpdateSubmit)}>
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
                                                        ref={register2({
                                                            required: true
                                                        })}
                                                        placeholder="Enter Unit Name"
                                                    />
                                                    <span className="text-danger">
                                                        {errors2.unit_name &&
                                                            "Unit name is required"}
                                                    </span>
                                                    <span className="text-danger">
                                                        {error.unit_name}
                                                    </span>
                                                </div>
                                            </div>
                                            <input
                                                name="unit_id"
                                                type="hidden"
                                                ref={register2({
                                                    required: true
                                                })}
                                            ></input>
                                            <div className="form-group ">
                                                <label className="col-lg-6 control-label">
                                                    Short Name:
                                                </label>
                                                <div className="col-lg-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="short_name"
                                                        ref={register2({
                                                            required: true
                                                        })}
                                                        placeholder="Enter Unit Short Name"
                                                    />
                                                    <span className="text-danger">
                                                        {errors2.short_name &&
                                                            "Unit Short Name is required"}
                                                    </span>
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
                                                        ref={register2({
                                                            required: true
                                                        })}
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
                                                        {errors2.status &&
                                                            "Select Unit Status"}
                                                    </span>
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
                                            {unit_list.map((unit, i) => (
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
                                                                EditHandler(
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
                                        </tbody>
                                        <tfoot>
                                            <tr>
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

export default Unit;
