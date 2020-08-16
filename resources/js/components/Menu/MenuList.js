import "./Menu.css";

import React, { Fragment } from "react";

import Pagination from "react-js-pagination";

const MenuList = props => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-header d-block">
                    <h3>Zero Configuration</h3>
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
                                                onChange={props.CurrentRow}
                                            >
                                                {/* {props.SelectRow.map(
                                                    (select_row, i) => {
                                                        <option>
                                                            {i + 1}
                                                        </option>;
                                                    }
                                                )} */}
                                                <option value={8}>8</option>
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
                                                onChange={props.onChangeSearch}
                                                value={props.SearchValue}
                                                onKeyUp={props.SearchKeyUp}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table
                                        id="simpletable"
                                        className="table table-striped table-bordered nowrap dataTable"
                                        role="grid"
                                        aria-describedby="simpletable_info"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th width="15">Menu Icon</th>
                                                <th>Menu Name</th>
                                                <th>Menu Slug</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.menu_list.map((menu, i) => (
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
                                                            className="btn btn-danger"
                                                            onClick={() =>
                                                                props.Delete(
                                                                    menu.menu_id
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-trash"></i>
                                                        </button>{" "}
                                                        <button
                                                            className="btn btn-info"
                                                            data-toggle="modal"
                                                            data-target="#edit_modal"
                                                            onClick={() =>
                                                                props.Edit(
                                                                    menu.menu_id
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-edit"></i>
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
                                    <Pagination
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        activePage={props.activePage}
                                        itemsCountPerPage={
                                            props.itemsCountPerPage
                                        }
                                        totalItemsCount={props.menu_list.length}
                                        pageRangeDisplayed={3}
                                        // onChange={this.handlePageChange.bind(
                                        //     this
                                        // )}
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

export default MenuList;
