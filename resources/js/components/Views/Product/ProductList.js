import "./product.css";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import PageHeader from "../Layouts/PageHeader/PageHeader";
import CustomPagination from "../../helpers/pagination/CustomPagination";
import { toast } from "react-toastify";
import swal from "sweetalert";

const ProductList = ({ breadCrumbs, Module }) => {
    const select_row = [15, 20, 30, 40, 50];
    const [activePage, setActivePage] = useState(1);
    const [currentRow, setCurrentRow] = useState(15);
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [totalItemsCount, setTotalItemsCount] = useState(0);

    // Get all product data.
    const getProducts = async (page = 1) => {
        await Axios.get("/products", {
            params: {
                q: search,
                row: currentRow,
                page: page
            }
        })
            .then(response => {
                setProducts(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getProducts();
        return () => setProducts([]);
    }, [search, currentRow]);

    // Product delete function.
    const deleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary data!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/products/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Product Has been Deleted",
                                "success"
                            );
                            let list = [...products];
                            list.splice(index, 1);
                            setProducts(list);
                        } else {
                            swal("Oops", "Something Went Wrong", "warning");
                        }
                    })
                    .catch(error => {
                        toast.error("Something went wrong!");
                    });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };

    // Product status change function.
    const changeStatus = id => {
        Axios.get("/products/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This product is active!");
                }
                if (response.data.code === 201) {
                    toast.warning("This product is inactive!");
                }
                getProducts();
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <Fragment>
            <PageHeader breadCrumbs={breadCrumbs} Module={Module} />
            <div className="card">
                <div className="card-header d-block">
                    <h3>Product List</h3>
                    <button
                        className="btn btn-info table-button"
                        data-toggle="modal"
                        data-target="#add_modal"
                    >
                        <Link
                            to={{
                                pathname: "/product/add_product",
                                state: "Product"
                            }}
                        >
                            <i className="ik ik-clipboard"></i>
                            Add new
                        </Link>
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
                                                    Product Name
                                                </th>
                                                <th className="text-center">
                                                    Product SKU
                                                </th>
                                                <th className="text-center">
                                                    Category Name
                                                </th>
                                                <th className="text-center">
                                                    Sub Category Name
                                                </th>
                                                <th className="text-center">
                                                    Brand Name
                                                </th>
                                                <th className="text-center">
                                                    Unit Name
                                                </th>
                                                <th className="text-center">
                                                    Product Alert Quantity
                                                </th>
                                                <th className="text-center">
                                                    Purchase Price
                                                </th>
                                                <th className="text-center">
                                                    Sale Price
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
                                            {products.map((product, i) => (
                                                <tr key={i}>
                                                    <td className="text-center">
                                                        {product.product_name
                                                            ? product.product_name
                                                            : "Null"}
                                                    </td>
                                                    <td className="text-center">
                                                        {product.product_sku}
                                                    </td>
                                                    <td className="text-center">
                                                        {
                                                            product.categories
                                                                .category_name
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                        {
                                                            product
                                                                .sub_categories
                                                                .sub_category_name
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                        {
                                                            product.brands
                                                                .brand_name
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                        {
                                                            product.units
                                                                .unit_name
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                        {
                                                            product.product_alert_qty
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                        {product.purchase_price}
                                                    </td>
                                                    <td className="text-center">
                                                        {product.sell_price}
                                                    </td>
                                                    <td className="text-center">
                                                        <center>
                                                            <div
                                                                className={
                                                                    product.status ==
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
                                                                product.status ==
                                                                1
                                                                    ? "ik ik-repeat f-16 mr-15 text-green"
                                                                    : "ik ik-repeat f-16 mr-15 text-red"
                                                            }
                                                            onClick={() =>
                                                                changeStatus(
                                                                    product.product_id
                                                                )
                                                            }
                                                        ></i>{" "}
                                                        <Link
                                                            to={{
                                                                pathname: `/product/${product.product_id}/edit`,
                                                                state:
                                                                    "Edit-Product"
                                                            }}
                                                        >
                                                            <i className="ik ik-edit f-16 mr-15 text-blue"></i>
                                                        </Link>{" "}
                                                        <i
                                                            className="ik ik-trash-2 f-16 text-red"
                                                            onClick={() =>
                                                                deleteHandler(
                                                                    product.product_id,
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
                                                        colSpan="11"
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
                                        getFunction={getProducts}
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

export default ProductList;
