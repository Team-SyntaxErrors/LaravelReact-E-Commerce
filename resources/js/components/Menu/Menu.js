import "./Menu.css";

import React, { Fragment, useState } from "react";

import Axios from "axios";

const Menu = () => {
    const [menu_name, setMenuName] = useState("");
    const [menu_icon, setMenuIcon] = useState("");

    const onImageChangeHandler = e => {
        let files = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            setMenuIcon(e.target.result);
        };
        reader.readAsDataURL(files);
    };

    const submitHandler = e => {
        e.preventDefault();
        const data = { menu_name, menu_icon };
        Axios.post("/menu", data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <Fragment>
            <button
                style={{ float: "right" }}
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#add_modal"
            >
                <i class="ik ik-clipboard"></i>
                Add new
            </button>

            <div className="card">
                <div className="card-header d-block">
                    <h3>Zero Configuration</h3>
                </div>
                <div className="card-body">
                    <div className="dt-responsive">
            <div id="simpletable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="simpletable_length">
                            <label>
                                Show
                                <select name="simpletable_length" aria-controls="simpletable" className="custom-select custom-select-sm form-control form-control-sm">
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                    </select>
                                    entries
                                    </label>
                                    </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div id="simpletable_filter" className="dataTables_filter">
                                            <label>
                                                Search:
                                            <input type="search" className="form-control form-control-sm" placeholder aria-controls="simpletable" />
                                            </label>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table id="simpletable" className="table table-striped table-bordered nowrap dataTable" role="grid" aria-describedby="simpletable_info">
                            <thead>
                                <tr role="row">
                                    <th className="sorting_asc" tabIndex={0} aria-controls="simpletable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: 206 }}>
                                        Name
                                        </th>
                                    <th className="sorting" tabIndex={0} aria-controls="simpletable" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: 307 }}>
                                        Position
                                        </th>
                                    <th className="sorting" tabIndex={0} aria-controls="simpletable" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" style={{ width: 154 }}>
                                        Office
                                        </th>
                                    <th className="sorting" tabIndex={0} aria-controls="simpletable" rowSpan={1} colSpan={1} aria-label="Age: activate to sort column ascending" style={{ width: 88 }}>
                                        Age
                                        </th>
                                    <th className="sorting" tabIndex={0} aria-controls="simpletable" rowSpan={1} colSpan={1} aria-label="Start date: activate to sort column ascending" style={{ width: 158 }}>
                                        Start date
                                        </th>
                                    <th className="sorting" tabIndex={0} aria-controls="simpletable" rowSpan={1} colSpan={1} aria-label="Salary: activate to sort column ascending" style={{ width: 113 }}>
                                        Salary
                                        </th>
                                    </tr>
                            </thead>
                            <tbody>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">Airi Satou</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>$162,700</td>
                                </tr></tbody>
                            <tfoot>
                                <tr><th rowSpan={1} colSpan={1}>Name</th><th rowSpan={1} colSpan={1}>Position</th><th rowSpan={1} colSpan={1}>Office</th><th rowSpan={1} colSpan={1}>Age</th><th rowSpan={1} colSpan={1}>Start date</th><th rowSpan={1} colSpan={1}>Salary</th></tr>
                            </tfoot>
                        </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="simpletable_info" role="status" aria-live="polite">Showing 1 to 10 of 20 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="simpletable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="simpletable_previous"><a href="#" aria-controls="simpletable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="simpletable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="simpletable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item next" id="simpletable_next"><a href="#" aria-controls="simpletable" data-dt-idx={3} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
                    </div>
                </div>
            </div>




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
                                        <label className="col-lg-2 control-label">
                                            Menu Name:
                                    </label>
                                        <div className="col-lg-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={e =>
                                                    setMenuName(e.target.value)
                                                }
                                                value={menu_name}
                                                placeholder="Enter Menu Name"
                                            />
                                            <span className="text-danger" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-lg-2 control-label">
                                            Menu Icon:
                                    </label>
                                        <div className="col-lg-10">
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={onImageChangeHandler}
                                                placeholder="Enter Menu Icon"
                                            />
                                            <span className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <img class="icon" src={menu_icon} />
                                        <span className="text-danger" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
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
        </Fragment>
    );
};

export default Menu;
