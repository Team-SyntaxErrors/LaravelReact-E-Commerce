import React, { useContext } from "react";

import CustomPagination from "../../helpers/pagination/CustomPagination";
import SubCategoryContext from "../../../containers/contexts/subcategory/SubCategoryContext";

const SubCategoryList = () => {
    const subCategoryContext = useContext(SubCategoryContext);

    const {
        clearFrom,
        setCurrentRow,
        selectRow,
        setSearch,
        search,
        subCategoryList,
        changeStatus,
        editHandler,
        deleteHandler,
        activePage,
        currentRow,
        totalItemsCount,
        getSubCategoryList
    } = subCategoryContext;
    return (
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
                                                setCurrentRow(e.target.value)
                                            }
                                        >
                                            {selectRow.map((rows, i) => (
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
                                                            ? subCategory.menus
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
    );
};

export default React.memo(SubCategoryList);
