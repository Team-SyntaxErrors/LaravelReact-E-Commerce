import Axios from "axios";
import React, { useState, useEffect } from "react";
import CategoryContext from "./CategoryContext";
import useForms from "../../../components/customHooks/useForms";
import ClearForm from "../../../components/helpers/clearForm/ClearForm";
import { toast } from "react-toastify";
import swal from "sweetalert";

const CategoryState = props => {
    const select_row = [15, 20, 30, 40, 50];
    const [activePage, setActivePage] = useState(1);
    const [currentRow, setCurrentRow] = useState(15);
    const [search, setSearch] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [menu, setMenu] = useState([]);
    const [errors, setErrors] = useState([]);
    const [categoryForm, setCategoryForm, handleChange] = useForms({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });
    const [editForm, setEditForm, editHandleChange] = useForms({
        menu_id: "",
        category_name: "",
        category_icon: ""
    });

    useEffect(() => {
        getCategories();
        return () => setCategoryList([]);
    }, [currentRow, search]);

    useEffect(() => {
        getAllMenu();
    }, []);

    // Get category list.
    const getCategories = (page = 1) => {
        const main_url = `category?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setCategoryList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Get menu.
    const getAllMenu = () => {
        Axios.get("/all_menu_get")
            .then(response => {
                setMenu(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(categoryForm);
        setCategoryForm({ ...categoryForm, ...form });
    };

    // Category submit function.
    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/category", categoryForm)
            .then(response => {
                if (response.data.code === 201) {
                    document.querySelector(".close").click();
                    getCategories();
                    clearFrom();
                    toast.success("Category Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    // Category delete function.
    const deleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/category/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Category Has been Deleted",
                                "success"
                            );
                            let list = [...categoryList];
                            list.splice(index, 1);
                            setCategoryList(list);
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

    // Category edit data set function.
    const editHandler = (id, data) => {
        categoryList.category_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm({ ...editForm, ...value });
    };

    // Category update function.
    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/category/" + editForm.category_id, editForm)
            .then(response => {
                if (response.data.code === 201) {
                    document.querySelector(".close").click();
                    getCategories();
                    clearFrom();
                    toast.success("Category Data Update Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    // Category status change function.
    const changeStatus = id => {
        Axios.get("/category/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This category is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This category is inactive successfully!");
                }
                getCategories();
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <CategoryContext.Provider
            value={{
                activePage,
                categoryList,
                search,
                currentRow,
                totalItemsCount,
                select_row,
                errors,
                menu,
                categoryForm,
                handleChange,
                editForm,
                editHandleChange,
                setSearch,
                setCurrentRow,
                getCategories,
                clearFrom,
                submitHandler,
                deleteHandler,
                changeStatus,
                editHandler,
                updateHandler
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    );
};

export default React.memo(CategoryState);
