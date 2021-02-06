import React, { useEffect, useState } from "react";

import Axios from "axios";
import ClearForm from "../../../components/helpers/clearForm/ClearForm";
import SubCategoryContext from "./SubCategoryContext";
import { toast } from "react-toastify";
import useForms from "../../../components/customHooks/useForms";

const SubCategoryState = props => {
    const selectRow = [15, 20, 30, 40, 50];
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [search, setSearch] = useState("");
    const [currentRow, setCurrentRow] = useState(15);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [errors, setErrors] = useState([]);
    const [menu, setMenu] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategoryForm, setSubCategoryForm, handleChange] = useForms({
        menu_id: "",
        category_id: "",
        sub_category_name: "",
        sub_category_icon: ""
    });

    const [editForm, setEditForm, editHandleChange] = useForms({
        menu_id: "",
        category_id: "",
        sub_category_name: "",
        sub_category_icon: ""
    });

    useEffect(() => {
        getMenu();
    }, []);

    useEffect(() => {
        getSubCategoryList();
        return () => {
            setSubCategoryList([]);
        };
    }, [search, currentRow]);

    const menuChangeFunctions = e => {
        handleChange(e);
        getCategory(e.target.value);
    };

    // Sub Category List
    const getSubCategoryList = (page = 1) => {
        const main_url = `sub_category?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setSubCategoryList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => console.log(error));
    };

    // Menu Data Get
    const getMenu = () => {
        Axios.get("/all_menu_get")
            .then(response => {
                setMenu(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Category Data Get
    const getCategory = menu_id => {
        Axios.get("/category_get/" + menu_id)
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Clear From
    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(subCategoryForm);
        setSubCategoryForm({ ...subCategoryForm, ...form });
    };

    // Form Submit Handler
    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/sub_category", subCategoryForm)
            .then(response => {
                if (response.data.code === 201) {
                    $(".close").click();
                    getSubCategoryList();
                    clearFrom();
                    toast.success("Sub Category Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    // Delete Handler
    const deleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/sub_category/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Sub Category Has been Deleted",
                                "success"
                            );
                            let list = [...subCategoryList];
                            console.log(list);
                            list.splice(index, 1);
                            setSubCategoryList(list);
                        } else {
                            swal("Oops", "Something Went Wrong", "warning");
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

    // Edit Data Get Handler
    const editHandler = (id, data) => {
        subCategoryList.sub_category_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm(value);
        getCategory(value.menu_id);
    };
    // Edit Data Get Handler

    // Update Form Submit Handler
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/sub_category/" + editForm.sub_category_id, editForm)
            .then(response => {
                if (response.data.code === 201) {
                    $(".close").click();
                    getSubCategoryList();
                    clearFrom();
                    toast.success("Sub Category Data Update Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    // Change Status Handler
    const changeStatus = id => {
        Axios.get("/sub_category/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This sub category is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning(
                        "This sub category is inactive successfully!"
                    );
                }
                getSubCategoryList();
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <SubCategoryContext.Provider
            value={{
                selectRow,
                subCategoryList,
                setSubCategoryList,
                search,
                setSearch,
                currentRow,
                setCurrentRow,
                activePage,
                setActivePage,
                totalItemsCount,
                setTotalItemsCount,
                errors,
                setErrors,
                menu,
                setMenu,
                category,
                setCategory,
                subCategoryForm,
                setSubCategoryForm,
                handleChange,
                editForm,
                setEditForm,
                editHandleChange,
                menuChangeFunctions,
                getSubCategoryList,
                getMenu,
                getCategory,
                clearFrom,
                submitHandler,
                deleteHandler,
                editHandler,
                updateHandler,
                changeStatus
            }}
        >
            {props.children}
        </SubCategoryContext.Provider>
    );
};

export default React.memo(SubCategoryState);
