import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";

function PageHeader() {
    return (
        <Fragment>
            <div className="page-header">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="page-header-title">
                            <i className="ik ik-home bg-blue" />
                            <div className="d-inline">
                                <h5>{useLocation().state}</h5>
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
                                    <a href="/">
                                        <i className="ik ik-home" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">{useLocation().state}</a>
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
