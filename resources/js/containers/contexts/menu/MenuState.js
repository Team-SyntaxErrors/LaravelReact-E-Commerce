import React, { useEffect, useState } from "react";

import Axios from "axios";
import ClearForm from "../../../components/helpers/clearForm/ClearForm";
import MenuContext from "./MenuContext";
import swal from "sweetalert";
import { toast } from "react-toastify";
import useForms from "../../../components/customHooks/useForms";

const MenuState = props => {
    const selectRow = [10, 20, 30, 40, 50];
    const [search, setSearch] = useState("");
    const [currentRow, setCurrentRow] = useState(8);
    const [errors, setErrors] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [menuForm, setMenuForm, handlerChange] = useForms({
        menu_name: "",
        menu_icon: ""
    });
    const [editMenu, setEditMenu, editHandlerChange] = useForms({
        menu_id: "",
        menu_name: "",
        menu_icon: ""
    });

    useEffect(() => {
        getMenuList();
    }, [currentRow, search]);

    const getMenuList = (page = 1) => {
        const main_url = `menu?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setMenuList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const clearFrom = () => {
        setErrors([]);
        let form = ClearForm(menuForm);
        setMenuForm({ ...menuForm, ...form });
    };

    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/menu", menuForm)
            .then(response => {
                if (response.data.code === 201) {
                    $("#close").click();
                    getMenuList();
                    clearFrom();
                    toast.success("Menu Data Inserted Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    const deleteHandler = (id, index) => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/menu/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Menu Has been Deleted",
                                "success"
                            );
                            let list = [...menuList];
                            list.splice(index, 1);
                            setMenuList(list);
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

    const editHandler = (id, data) => {
        menuList.menu_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditMenu(value);
    };

    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/menu/" + editMenu.menu_id, editMenu)
            .then(response => {
                if (response.data.code === 201) {
                    $("#edit_close").click();
                    getMenuList();
                    clearFrom();
                    toast.success("Menu Data Update Successfully!");
                }
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    const changeStatus = id => {
        Axios.get("/menu/status/" + id)
            .then(response => {
                if (response.data.code === 200) {
                    toast.success("This menu is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This menu is inactive successfully!");
                }
                getMenuList();
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <MenuContext.Provider
            value={{
                editMenu,
                activePage,
                setActivePage,
                menuList,
                setMenuList,
                search,
                currentRow,
                menuForm,
                errors,
                setErrors,
                selectRow,
                setSearch,
                setCurrentRow,
                totalItemsCount,
                setTotalItemsCount,
                handlerChange,
                editHandlerChange,
                getMenuList,
                clearFrom,
                setMenuForm,
                submitHandler,
                deleteHandler,
                editHandler,
                updateHandler,
                setEditMenu,
                changeStatus
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};

export default React.memo(MenuState);
