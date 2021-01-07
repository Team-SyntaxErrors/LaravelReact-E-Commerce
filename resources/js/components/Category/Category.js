import "./Category.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import CategoryList from "./CategoryList";
import CategoryState from "../../containers/contexts/category/CategoryState";

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
