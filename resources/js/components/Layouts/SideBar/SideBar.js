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

                            <div className="nav-item has-sub">
                                <a>
                                    <i className="ik ik-layers" />
                                    <span>Web Settings</span>{" "}
                                </a>
                                <div className="submenu-content">
                                    <div>
                                        <Link
                                            className="menu-item"
                                            className={
                                                useLocation().pathname ==
                                                "/menu_list"
                                                    ? "menu-item active"
                                                    : "menu-item"
                                            }
                                            to={{
                                                pathname: "/menu_list",
                                                state: "Menu"
                                            }}
                                        >
                                            <span>Menu</span>{" "}
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="menu-item"
                                            className={
                                                useLocation().pathname ==
                                                "/categories"
                                                    ? "menu-item active"
                                                    : "menu-item"
                                            }
                                            to={{
                                                pathname: "/categories",
                                                state: "Category"
                                            }}
                                        >
                                            <span>Category</span>{" "}
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="menu-item"
                                            className={
                                                useLocation().pathname ==
                                                "/subcategories"
                                                    ? "menu-item active"
                                                    : "menu-item"
                                            }
                                            to={{
                                                pathname: "/subcategories",
                                                state: "SubCategory"
                                            }}
                                        >
                                            <span>SubCategory</span>{" "}
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="menu-item"
                                            className={
                                                useLocation().pathname ==
                                                "/unit"
                                                    ? "menu-item active"
                                                    : "menu-item"
                                            }
                                            to={{
                                                pathname: "/unit",
                                                state: "Unit"
                                            }}
                                        >
                                            <span>Unit</span>{" "}
                                        </Link>
                                    </div>
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
