import React from "react";
import { ToastContainer } from "react-toastify";

const Toastr = () => {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
        />
    );
};

export default Toastr;
