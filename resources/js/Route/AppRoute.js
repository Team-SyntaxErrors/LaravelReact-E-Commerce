import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

import Brand from "../components/Brand/Brand";
import Category from "../components/Category/Category";
import DashBoard from "../components/DashBoard/DashBoard";
import Menu from "../components/Menu/Menu";
import SubCategory from "../components/SubCategory/SubCategory";
import Unit from "../components/Unit/Unit";
import ListProduct from "../components/Product/ProductList";
import AddProduct from "../components/Product/AddProduct";
function AppRoute() {
    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <DashBoard breadCrumbs="Dashboard" />}
                />
                <Route
                    exact
                    path="/menu_list"
                    render={() => (
                        <Menu breadCrumbs="Menu" Module="Web-Settings" />
                    )}
                />
                <Route
                    exact
                    path="/categories"
                    render={() => (
                        <Category
                            breadCrumbs="Category"
                            Module="Web-Settings"
                        />
                    )}
                />
                <Route
                    exact
                    path="/subcategories"
                    render={() => (
                        <SubCategory
                            breadCrumbs="Sub-Category"
                            Module="Web-Settings"
                        />
                    )}
                />
                <Route
                    exact
                    path="/unit"
                    render={() => (
                        <Unit breadCrumbs="Unit" Module="Web-Settings" />
                    )}
                />
                <Route
                    exact
                    path="/brand"
                    render={() => (
                        <Brand breadCrumbs="Brand" Module="Web-Settings" />
                    )}
                />
                <Route
                    exact
                    path="/product"
                    render={() => (
                        <ListProduct breadCrumbs="Product" Module="Products" />
                    )}
                />
                <Route
                    exact
                    path="/product/add"
                    render={() => (
                        <AddProduct
                            breadCrumbs="Add Product"
                            Module="Products"
                        />
                    )}
                />
            </Switch>
        </Fragment>
    );
}

export default AppRoute;
