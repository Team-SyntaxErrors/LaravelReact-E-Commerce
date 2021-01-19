import "react-toastify/dist/ReactToastify.css";

import { Fragment, React } from "react";

import Axios from "axios";
import PageHeader from "../Layouts/PageHeader/PageHeader";

const ProductList = props => {
    return (
        <Fragment>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <h1>Hello</h1>
        </Fragment>
    );
};

export default ProductList;
