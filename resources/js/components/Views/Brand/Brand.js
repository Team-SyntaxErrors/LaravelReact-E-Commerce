import "./Brand.css";
import "react-toastify/dist/ReactToastify.css";

import AddBrand from "./AddBrand";
import BrandList from "./BrandList";
import BrandState from "../../../containers/contexts/brand/BrandState";
import EditBrand from "./EditBrand";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import React from "react";

const Brand = props => {
    return (
        <BrandState>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <AddBrand />
            <EditBrand />
            <BrandList />
        </BrandState>
    );
};
export default React.memo(Brand);
