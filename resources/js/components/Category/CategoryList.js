import React, { useContext } from "react";
import CategoryContext from "../../containers/contexts/category/CategoryContext";
import CustomPagination from "../helpers/pagination/CustomPagination";

const CategoryList = () => {
    const categoryContext = useContext(CategoryContext);
    const {
        activePage,
        categoryList,
        search,
        currentRow,
        totalItemsCount,
        setSearch,
        select_row,
        setCurrentRow,
        getCategories,
        clearFrom,
        deleteHandler,
        changeStatus,
        editHandler
    } = categoryContext;

    return (
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
                                <CustomPagination
                                    activePage={activePage}
                                    currentRow={currentRow}
                                    totalItems={totalItemsCount}
                                    getFunction={getCategories}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CategoryList);
