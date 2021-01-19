import React, { useContext } from "react";

import BrandContext from "../../../containers/contexts/brand/BrandContext";
import CustomPagination from "../../helpers/pagination/CustomPagination";
import Pagination from "react-js-pagination";

const BrandList = () => {
    const brandContext = useContext(BrandContext);
    const {
        setCurrentRaw,
        select_row,
        setSearch,
        search,
        BrandList,
        ChangeStatus,
        EditHandler,
        DeleteHandler,
        totalItemsCount,
        activePage,
        current_raw,
        GetBrandList
    } = brandContext;
    return (
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
                                                setCurrentRaw(e.target.value)
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
                                                            brand.status == 1
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
    );
};

export default React.memo(BrandList);
