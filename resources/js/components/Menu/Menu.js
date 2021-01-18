import "./Menu.css";
import "react-toastify/dist/ReactToastify.css";

import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import MenuList from "./MenuList";
import MenuState from "../../containers/contexts/menu/MenuState";
import PageHeader from "./../Layouts/PageHeader/PageHeader";
import React from "react";

const Menu = props => {
    return (
        <MenuState>
            <PageHeader breadCrumbs={props.breadCrumbs} Module={props.Module} />
            <AddMenu />
            <EditMenu />
            <MenuList />
        </MenuState>
    );
};

export default React.memo(Menu);
