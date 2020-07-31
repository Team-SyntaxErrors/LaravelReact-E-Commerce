import React, {Fragment} from 'react'
import {Route, Switch} from "react-router";

import DashBoard from '../components/DashBoard/DashBoard';
import Example from '../components/Example';
import Form from '../components/Form/Form';

function AppRoute() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={DashBoard}/>
                <Route exact path="/data" component={Example}/>
                <Route exact path="/form" component={Form}/>
            </Switch>
        </Fragment>
    )
}

export default AppRoute
