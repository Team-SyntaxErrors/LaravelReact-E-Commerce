import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

import Category from "../components/Category/Category";
import DashBoard from "../components/DashBoard/DashBoard";
import Menu from "../components/Menu/Menu";

function AppRoute() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route exact path="/menu_list" component={Menu} />
                <Route exact path="/categories" component={Category} />
            </Switch>
        </Fragment>
    );
}

export default AppRoute;
