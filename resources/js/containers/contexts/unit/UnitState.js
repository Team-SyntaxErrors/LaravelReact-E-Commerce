import React, { useEffect, useState } from "react";

import Axios from "axios";
import UnitContext from "./UnitContext";
import swal from "sweetalert";
import { toast } from "react-toastify";
import useForms from "../../../components/customHooks/useForms";

const UnitState = props => {
    const select_row = [10, 20, 30, 40, 50];
    const [search, setSearch] = useState("");
    const [error, setError] = useState([]);
    const [unitList, setUnitList] = useState([]);
    const [currentRow, setCurrentRow] = useState(10);
    const [activePage, setActivePage] = useState(1);
    const [totalItemsCount, setTotalItemsCount] = useState(0);
    const [unitForm, setUnitForm, handleChange] = useForms({
        unit_name: "",
        short_name: "",
        status: ""
    });
    const [editForm, setEditForm, EditHandleChange] = useForms({
        unit_name: "",
        short_name: "",
        status: ""
    });

    const getUnitList = (page = 1) => {
        const main_url = `units?q=${search}&row=${currentRow}&page=${page}`;
        Axios.get(main_url)
            .then(response => {
                setUnitList(response.data.data.data);
                setActivePage(response.data.data.current_page);
                setTotalItemsCount(response.data.data.total);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUnitList();
        return () => setUnitList([]);
    }, [currentRow, search]);

    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/units", unitForm)
            .then(response => {
                setError([]);
                getUnitList();
                $("#close").click();
                toast.success("Unit Data Inserted Successfully!");
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    const DeleteHandler = id => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                Axios.delete("/units/" + id)
                    .then(response => {
                        if (response.status === 204) {
                            swal(
                                "Deleted!",
                                "Unit Has been Deleted",
                                "success"
                            );
                            getUnitList();
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
        unitList.unit_id = id;
        let value = JSON.parse(JSON.stringify(data));
        setEditForm({ ...editForm, ...value });
    };

    const updateHandler = e => {
        e.preventDefault();
        Axios.put("/units/" + editForm.unit_id, editForm)
            .then(response => {
                getUnitList();
                $("#edit_close").click();
                setError([]);
                toast.success("Unit Data Update Successfully!");
            })
            .catch(error => {
                if (error.response.status == 422) {
                    setError(error.response.data.errors);
                }
            });
    };

    const ChangeStatus = id => {
        Axios.get("/units/" + id)
            .then(response => {
                console.log(response);
                if (response.data.code === 200) {
                    toast.success("This unit is active successfully!");
                }
                if (response.data.code === 201) {
                    toast.warning("This unit is inactive successfully!");
                }
                getUnitList();
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <UnitContext.Provider
            value={{
                select_row,
                search,
                setSearch,
                error,
                setError,
                unitList,
                setUnitList,
                currentRow,
                setCurrentRow,
                activePage,
                setActivePage,
                totalItemsCount,
                setTotalItemsCount,
                unitForm,
                setUnitForm,
                handleChange,
                editForm,
                setEditForm,
                EditHandleChange,
                getUnitList,
                submitHandler,
                DeleteHandler,
                editHandler,
                updateHandler,
                ChangeStatus
            }}
        >
            {props.children}
        </UnitContext.Provider>
    );
};

export default React.memo(UnitState);
