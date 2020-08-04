import { Link, useLocation } from "react-router-dom";
import React, { Fragment } from "react";

function SideBar() {
    return (
        <Fragment>
            <div className="app-sidebar colored">
                <div className="sidebar-header">
                    <a className="header-brand" href="index.html">
                        <div className="logo-img">
                            <img
                                src="backend_assets/src/img/brand-white.svg"
                                className="header-brand-img"
                            />
                        </div>
                        <span className="text">ReactLaravel</span>
                    </a>
                    <button type="button" className="nav-toggle">
                        <i
                            data-toggle="expanded"
                            className="ik ik-toggle-right toggle-icon"
                        />
                    </button>
                    <button id="sidebarClose" className="nav-close">
                        <i className="ik ik-x" />
                    </button>
                </div>
                <div className="sidebar-content">
                    <div className="nav-container">
                        <nav
                            id="main-menu-navigation"
                            className="navigation-main"
                        >
                            <div
                                className={
                                    useLocation().pathname == "/"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link
                                    to={{ pathname: "/", state: "Dashboard" }}
                                >
                                    <i className="ik ik-bar-chart-2" />
                                    <span>Dashboard</span>
                                </Link>
                            </div>
                            <div
                                className={
                                    useLocation().pathname == "/menu_list"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link
                                    to={{
                                        pathname: "/menu_list",
                                        state: "Menu"
                                    }}
                                >
                                    <i className="ik ik-menu" />
                                    <span>Menu</span>{" "}
                                </Link>
                            </div>
                            <div className="nav-item has-sub">
                                <a href="#">
                                    <i className="ik ik-layers" />
                                    <span>Widgets</span>{" "}
                                </a>
                                <div className="submenu-content">
                                    <a
                                        href="pages/widgets.html"
                                        className="menu-item"
                                    >
                                        Basic
                                    </a>
                                    <a
                                        href="pages/widget-statistic.html"
                                        className="menu-item"
                                    >
                                        Statistic
                                    </a>
                                    <a
                                        href="pages/widget-data.html"
                                        className="menu-item"
                                    >
                                        Data
                                    </a>
                                    <a
                                        href="pages/widget-chart.html"
                                        className="menu-item"
                                    >
                                        Chart Widget
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SideBar;
