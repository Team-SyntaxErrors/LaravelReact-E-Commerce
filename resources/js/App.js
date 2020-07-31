import AppRoute from './Route/AppRoute';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Layouts/Footer/Footer';
import NavBar from './components/Layouts/NavBar/NavBar';
import PageHeader from './components/Layouts/PageHeader/PageHeader';
import React from 'react'
import SideBar from './components/Layouts/SideBar/SideBar';
function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="wrapper">
                    <NavBar/>
                    <div className="page-wrap">
                        <SideBar/>
                        <div className="main-content">
                        <PageHeader/>
                        <AppRoute/>
                    </div>

                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
