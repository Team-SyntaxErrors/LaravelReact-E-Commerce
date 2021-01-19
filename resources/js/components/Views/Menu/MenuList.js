import React, { useContext } from "react";

import CustomPagination from "../../helpers/pagination/CustomPagination";
import MenuContext from "../../../containers/contexts/menu/MenuContext";

const MenuList = () => {
    const menuContext = useContext(MenuContext);
    const {
        clearFrom,
        setCurrentRow,
        selectRow,
        setSearch,
        search,
        menuList,
        changeStatus,
        editHandler,
        deleteHandler,
        totalItemsCount,
        activePage,
        currentRow,
        getMenuList
    } = menuContext;
    return (
        <div className="card">
            <div className="card-header d-block">
                <h3>Menu List</h3>
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
                                    aria-describedby="simpletable_info"
                                >
                                    <thead>
                                        <tr role="row">
                                            <th
                                                className="custom-head text-center"
                                                style={{ width: "15%" }}
                                            >
                                                Menu Icon
                                            </th>
                                            <th className="text-center">
                                                Menu Name
                                            </th>
                                            <th className="text-center">
                                                Menu Slug
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
                                        {menuList.map((menu, i) => (
                                            <tr key={i}>
                                                <td className="text-center">
                                                    <img
                                                        className="image-list rounded-circle"
                                                        src={menu.menu_icon}
                                                    />
                                                </td>
                                                <td className="text-center">
                                                    {menu.menu_name}
                                                </td>
                                                <td className="text-center">
                                                    {menu.menu_slug}
                                                </td>
                                                <td>
                                                    <center>
                                                        <div
                                                            className={
                                                                menu.status == 1
                                                                    ? "p-status bg-green"
                                                                    : "p-status bg-red"
                                                            }
                                                        ></div>
                                                    </center>
                                                </td>
                                                <td className="text-center">
                                                    <i
                                                        className={
                                                            menu.status == 1
                                                                ? "ik ik-repeat f-16 mr-15 text-green"
                                                                : "ik ik-repeat f-16 mr-15 text-red"
                                                        }
                                                        onClick={() =>
                                                            changeStatus(
                                                                menu.menu_id
                                                            )
                                                        }
                                                    ></i>{" "}
                                                    <i
                                                        className="ik ik-edit f-16 mr-15 text-blue"
                                                        data-toggle="modal"
                                                        data-target="#edit_modal"
                                                        onClick={() =>
                                                            editHandler(
                                                                menu.menu_id,
                                                                menu
                                                            )
                                                        }
                                                    ></i>{" "}
                                                    <i
                                                        className="ik ik-trash-2 f-16 text-red"
                                                        onClick={() =>
                                                            deleteHandler(
                                                                menu.menu_id,
                                                                i
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
                                    <tfoot>
                                        <tr>
                                            <th className="text-center">
                                                Menu Icon
                                            </th>
                                            <th className="text-center">
                                                Menu Name
                                            </th>
                                            <th className="text-center">
                                                Menu Slug
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
                                <CustomPagination
                                    activePage={activePage}
                                    currentRow={currentRow}
                                    totalItems={totalItemsCount}
                                    getFunction={getMenuList}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MenuList);
