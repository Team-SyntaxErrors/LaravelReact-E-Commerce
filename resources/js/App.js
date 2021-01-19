import AppRoute from "./Route/AppRoute";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Views/Layouts/Footer/Footer";
import NavBar from "./components/Views/Layouts/NavBar/NavBar";
import React from "react";
import SideBar from "./components/Views/Layouts/SideBar/SideBar";
import Toastr from "./components/helpers/Toastr/Toastr";
function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="wrapper">
                    <NavBar />
                    <div className="page-wrap">
                        <SideBar />
                        <div className="main-content">
                            <AppRoute />
                            <Toastr />
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
