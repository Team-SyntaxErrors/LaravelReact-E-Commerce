import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <Fragment>
            <footer className="footer">
                <div className="w-100 clearfix">
                    <span className="text-center text-sm-left d-md-inline-block">
                        Copyright © 2020 SyntaxErrors
                    </span>
                    <span className="float-none float-sm-right mt-1 mt-sm-0 text-center">
                        <i className="fa fa-heart text-danger" />{" "}
                        <Link to={{ pathname: "/", state: "Dashboard" }}>
                            <span>SyntaxErrors</span>
                        </Link>
                    </span>
                </div>
            </footer>
        </Fragment>
    );
}

export default React.memo(Footer);
