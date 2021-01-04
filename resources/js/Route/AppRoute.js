import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import router from "../router";
const AddProduct = lazy(() => import("../components/Product/AddProduct"));
const Brand = lazy(() => import("../components/Brand/Brand"));
const Category = lazy(() => import("../components/Category/Category"));
const DashBoard = lazy(() => import("../components/DashBoard/DashBoard"));
const Menu = lazy(() => import("../components/Menu/Menu"));
const SubCategory = lazy(() => import("../components/SubCategory/SubCategory"));
const Unit = lazy(() => import("../components/Unit/Unit"));

function AppRoute() {
    return (
        <Fragment>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    {/* {router.map((route, index) => {
                    return (
                        route.component && (
                            <Route
                                key={index}
                                path={route.path}
                                render={() => (
                                    <route.component
                                        breadCrumbs={route.breadCrumbs}
                                        Module={route.module}
                                    />
                                )}
                            />
                        )
                    );
                })} */}
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
                            <ListProduct
                                breadCrumbs="Product"
                                Module="Products"
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/product/add_product"
                        render={() => (
                            <AddProduct
                                breadCrumbs="Add Product"
                                Module="Products"
                            />
                        )}
                    />
                </Switch>
            </Suspense>
        </Fragment>
    );
}

export default AppRoute;
