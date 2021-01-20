import "./Unit.css";
import "react-toastify/dist/ReactToastify.css";

import AddUnit from "./AddUnit";
import EditUnit from "./EditUnit";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import React from "react";
import UnitList from "./UnitList";
import UnitState from "../../../containers/contexts/unit/UnitState";

const Unit = props => {
    return (
        <UnitState>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <AddUnit />
            <EditUnit />
            <UnitList />
        </UnitState>
    );
};

export default React.memo(Unit);
