import "@pathofdev/react-tag-input/build/index.css";
import "./AddProduct.module.css";

import AddProduct from "./AddProduct";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import ProductState from "../../containers/contexts/product/ProductState";
import React from "react";

const Product = props => {
    return (
        <ProductState>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <AddProduct />
        </ProductState>
    );
};

export default React.memo(Product);
