import React, { useEffect, useRef, useState } from "react";

import Axios from "axios";
import BrandContext from "./BrandContext";
import ClearForm from "../../../components/helpers/clearForm/ClearForm";
import SimpleReactValidator from "simple-react-validator";
import swal from "sweetalert";
import { toast } from "react-toastify";
import useForms from "../../../components/customHooks/useForms";

const BrandState = props => {
    const [Brand, setBrand] = useState([]);
    const [BrandList, setBrandList] = useState([]);
    const [search, setSearch] = useState("");
    const select_row = [10, 20, 30, 40, 50, 100];
    const [current_raw, setCurrentRaw] = useState(10);
    const [page, setPage] = useState(1);
    const [error, setErrors] = useState([]);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);

    const [brand_form, setBrandFrom, handleChange] = useForms({
        brand_name: "",
        contact_person: "",
        phone_number: "",
        brand_address: "",
        brand_logo: "",
        status: 1
    });
    const [EditForm, setEditForm, EditHandleChange] = useForms({
        brand_name: "",
        contact_person: "",
        phone_number: "",
        brand_address: "",
        brand_logo: "",
        status: 1
    });

    const handlePageChange = pageNumber => {
        setPage(pageNumber);
    };

    /**
     * Clear form function.
     * Clear state value.
     */
    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(brand_form);
        setBrandFrom({ ...brand_form, ...form });
    };

    // Brand List Get
    const GetBrandList = (page = 1) => {
        const main_url = `brands?q=${search}&row=${current_raw}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setBrandList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        GetBrandList();
        return () => {
            setBrandList([]);
        };
    }, [current_raw, search, page]);

    // Data Submit
    const onAddSubmit = e => {
        e.preventDefault();
        Axios.post("/brands", brand_form)
            .then(response => {
                $(".close").click();
                GetBrandList();
                clearFrom();
                toast.success("Brand Data Inserted Successfully!");
            })
            .catch(error => {
                if (error.response) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    // Brand Delete
    const DeleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/brands/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            GetBrandList();
                            swal(
                                "Deleted!",
                                "Brand Has been Deleted",
                                "success"
                            );
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
    // Brand Status Change
    const ChangeStatus = id => {
        Axios.get("/brands/status/" + id)
            .then(response => {
                console.log(response);
                if (response.data.code === 200) {
                    toast.success("This brand is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This Brand is inactive successfully!");
                }
                GetBrandList();
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Brand Edit
    const EditHandler = (id, data, index) => {
        BrandList.brand_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm(value);
    };
    // Category Data Update
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/brands/" + EditForm.brand_id, EditForm)
            .then(response => {
                $(".close").click();
                GetBrandList();
                toast.success("Brand Data Update Successfully!");
            })
            .catch(error => {
                if (error.response) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    return (
        <BrandContext.Provider
            value={{
                Brand,
                setBrand,
                BrandList,
                setBrandList,
                search,
                setSearch,
                select_row,
                current_raw,
                setCurrentRaw,
                page,
                setPage,
                error,
                setErrors,
                simpleValidator,
                activePage,
                setActivePage,
                totalItemsCount,
                setTotalItemsCount,
                brand_form,
                setBrandFrom,
                handleChange,
                EditForm,
                setEditForm,
                EditHandleChange,
                handlePageChange,
                clearFrom,
                GetBrandList,
                onAddSubmit,
                DeleteHandler,
                ChangeStatus,
                EditHandler,
                updateHandler
            }}
        >
            {props.children}
        </BrandContext.Provider>
    );
};

export default React.memo(BrandState);
