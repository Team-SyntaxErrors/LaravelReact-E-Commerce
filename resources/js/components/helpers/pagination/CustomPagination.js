import React from "react";
import Pagination from "react-js-pagination";
// import PropTypes from "prop-types";

const CustomPagination = ({ activePage, totalItems, getFunction }) => {
    return (
        totalItems > 8 && (
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

// CustomPagination.prototype = {
//     activePage: PropTypes.integer.isRequired,
//     totalItems: PropTypes.integer.isRequired,
//     getFunction: PropTypes.func.isRequired
// };

export default CustomPagination;
