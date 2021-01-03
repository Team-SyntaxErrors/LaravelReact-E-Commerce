import React from "react";
import Pagination from "react-js-pagination";

const CustomPagination = ({ activePage, totalItems, getFunction }) => {
    return (
        <Pagination
            innerClass="btn-group"
            linkClass="btn btn-outline-secondary"
            activePage={activePage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={3}
            onChange={getFunction}
            hideFirstLastPages={true}
            // hideDisabled={true}
        />
    );
};

export default CustomPagination;
