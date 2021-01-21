import "./SubCategory.css";
import "react-toastify/dist/ReactToastify.css";

import AddSubCategory from "./AddSubCategory";
import EditSubCategory from "./EditCategory";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import React from "react";
import SubCategoryList from "./SubCategoryList";
import SubCategoryState from "../../../containers/contexts/subcategory/SubCategoryState";

const SubCategory = props => {
    return (
        <SubCategoryState>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <AddSubCategory />
            <EditSubCategory />
            <SubCategoryList />
        </SubCategoryState>
    );
};

export default React.memo(SubCategory);
