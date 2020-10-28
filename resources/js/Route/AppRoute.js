import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

import Brand from "../components/Brand/Brand";
import Category from "../components/Category/Category";
import DashBoard from "../components/DashBoard/DashBoard";
import Menu from "../components/Menu/Menu";
import SubCategory from "../components/SubCategory/SubCategory";
import Unit from "../components/Unit/Unit";

function AppRoute() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route
                    exact
                    path="/menu_list"
                    render={() => <Menu breadCrumbs="Menu" />}
                />
                <Route exact path="/categories" component={Category} />
                <Route exact path="/subcategories" component={SubCategory} />
                <Route exact path="/unit" component={Unit} />
                <Route exact path="/brand" component={Brand} />
            </Switch>
        </Fragment>
    );
}

export default AppRoute;
