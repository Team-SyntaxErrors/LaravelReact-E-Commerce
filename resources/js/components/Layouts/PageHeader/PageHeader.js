import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";

function PageHeader() {
    return (
        <Fragment>
            <div className="page-header">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="page-header-title">
                            <i className="ik ik-edit bg-blue" />
                            <div className="d-inline">
                                <h5>{useLocation().state}</h5>
                                <span>
                                    lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <nav
                            className="breadcrumb-container"
                            aria-label="breadcrumb"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="../index.html">
                                        <i className="ik ik-home" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Forms</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Group Add-Ons
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PageHeader;
