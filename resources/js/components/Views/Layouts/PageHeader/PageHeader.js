import React, { Fragment } from "react";

function PageHeader({ breadCrumbs, Module }) {
    return (
        <Fragment>
            <div className="page-header">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="page-header-title">
                            <div className="d-inline">
                                <h5>{breadCrumbs}</h5>
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
                                {Module && (
                                    <li className="breadcrumb-item">
                                        <a>{Module}</a>
                                    </li>
                                )}
                                <li
                                    className={breadCrumbs && "breadcrumb-item"}
                                >
                                    <a>{breadCrumbs}</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default React.memo(PageHeader);
