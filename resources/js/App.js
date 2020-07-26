import React from 'react'
import NavBar from './components/Layouts/NavBar/NavBar';

import SideBar from './components/Layouts/SideBar/SideBar';
import Footer from './components/Layouts/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './Route/AppRoute';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="wrapper">
                    <NavBar/>
                    <div className="page-wrap">
                        <SideBar/>
                        <AppRoute/>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
