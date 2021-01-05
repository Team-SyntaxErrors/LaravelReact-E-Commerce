import React from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";

const CustomPagination = ({ activePage, totalItems, getFunction }) => {
    return (
        totalItems > 10 && (
            <Pagination
                innerClass="btn-group"
                linkClass="btn btn-outline-secondary"
                activePage={activePage}
                totalItemsCount={totalItems}
                pageRangeDisplayed={3}
                onChange={getFunction}
                hideFirstLastPages={true}
                hideDisabled={true}
            />
        )
    );
};

CustomPagination.prototype = {
    activePage: PropTypes.integer,
    totalItems: PropTypes.integer,
    getFunction: PropTypes.func
};

export default CustomPagination;
