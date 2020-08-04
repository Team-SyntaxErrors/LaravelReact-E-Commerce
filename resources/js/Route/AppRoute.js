import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

import DashBoard from "../components/DashBoard/DashBoard";
import Menu from "../components/Menu/Menu";

function AppRoute() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route exact path="/menu" component={Menu} />
            </Switch>
        </Fragment>
    );
}

export default AppRoute;
