import "./Category.css";
import "react-toastify/dist/ReactToastify.css";

import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";
import CategoryState from "../../../containers/contexts/category/CategoryState";
import EditCategory from "./EditCategory";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import React from "react";

const Category = props => {
    return (
        <CategoryState>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <AddCategory />
            <EditCategory />
            <CategoryList />
        </CategoryState>
    );
};

export default React.memo(Category);
