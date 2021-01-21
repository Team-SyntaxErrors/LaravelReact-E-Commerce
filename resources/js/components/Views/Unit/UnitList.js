import React, { useContext } from "react";

import CustomPagination from "../../helpers/pagination/CustomPagination";
import UnitContext from "../../../containers/contexts/unit/UnitContext";

const UnitList = () => {
    const unitContext = useContext(UnitContext);
    const {
        setCurrentRow,
        select_row,
        setSearch,
        search,
        unitList,
        ChangeStatus,
        editHandler,
        DeleteHandler,
        totalItemsCount,
        activePage,
        currentRow,
        getUnitList
    } = unitContext;
    return (
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
                                                setCurrentRow(e.target.value)
                                            }
                                        >
                                            {select_row.map((rows, i) => (
                                                <option key={i} value={rows}>
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
                                                                unit.status == 1
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
    );
};

export default React.memo(UnitList);
