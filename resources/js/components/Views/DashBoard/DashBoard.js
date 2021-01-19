import React, { Fragment } from "react";

import PageHeader from "./../Layouts/PageHeader/PageHeader";

function DashBoard(props) {
    return (
        <Fragment>
            <PageHeader breadCrumbs={props.breadCrumbs} />
            <div>
                {/* <div className="container-fluid"> */}
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="widget">
                            <div className="widget-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="state">
                                        <h6>Bookmarks</h6>
                                        <h2>1,410</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="ik ik-award" />
                                    </div>
                                </div>
                                <small className="text-small mt-10 d-block">
                                    6% higher than last month
                                </small>
                            </div>
                            <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    aria-valuenow={62}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "62%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="widget">
                            <div className="widget-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="state">
                                        <h6>Likes</h6>
                                        <h2>41,410</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="ik ik-thumbs-up" />
                                    </div>
                                </div>
                                <small className="text-small mt-10 d-block">
                                    61% higher than last month
                                </small>
                            </div>
                            <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow={78}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "78%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="widget">
                            <div className="widget-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="state">
                                        <h6>Events</h6>
                                        <h2>410</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="ik ik-calendar" />
                                    </div>
                                </div>
                                <small className="text-small mt-10 d-block">
                                    Total Events
                                </small>
                            </div>
                            <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-valuenow={31}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "31%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="widget">
                            <div className="widget-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="state">
                                        <h6>Comments</h6>
                                        <h2>41,410</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="ik ik-message-square" />
                                    </div>
                                </div>
                                <small className="text-small mt-10 d-block">
                                    Total Comments
                                </small>
                            </div>
                            <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    aria-valuenow={20}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "20%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-12">
                                        <h3 className="card-title">
                                            Visitors By Countries
                                        </h3>
                                        <div
                                            id="visitfromworld"
                                            style={{
                                                width: "100%",
                                                height: 350
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="row mb-15">
                                            <div className="col-9">India</div>
                                            <div className="col-3 text-right">
                                                28%
                                            </div>
                                            <div className="col-12">
                                                <div className="progress progress-sm mt-5">
                                                    <div
                                                        className="progress-bar bg-green"
                                                        role="progressbar"
                                                        style={{
                                                            width: "48%"
                                                        }}
                                                        aria-valuenow={48}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-15">
                                            <div className="col-9"> UK</div>
                                            <div className="col-3 text-right">
                                                21%
                                            </div>
                                            <div className="col-12">
                                                <div className="progress progress-sm mt-5">
                                                    <div
                                                        className="progress-bar bg-aqua"
                                                        role="progressbar"
                                                        style={{
                                                            width: "33%"
                                                        }}
                                                        aria-valuenow={33}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-15">
                                            <div className="col-9"> USA</div>
                                            <div className="col-3 text-right">
                                                18%
                                            </div>
                                            <div className="col-12">
                                                <div className="progress progress-sm mt-5">
                                                    <div
                                                        className="progress-bar bg-purple"
                                                        role="progressbar"
                                                        style={{
                                                            width: "40%"
                                                        }}
                                                        aria-valuenow={40}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-9">China</div>
                                            <div className="col-3 text-right">
                                                12%
                                            </div>
                                            <div className="col-12">
                                                <div className="progress progress-sm mt-5">
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        role="progressbar"
                                                        style={{
                                                            width: "15%"
                                                        }}
                                                        aria-valuenow={15}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ minHeight: 422 }}>
                            <div className="card-header">
                                <h3>Donut chart</h3>
                            </div>
                            <div className="card-body">
                                <div id="c3-donut-chart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>Recent Chat</h3>
                                <div className="card-header-right">
                                    <ul className="list-unstyled card-option">
                                        <li>
                                            <i className="ik ik-chevron-left action-toggle" />
                                        </li>
                                        <li>
                                            <i className="ik ik-minus minimize-card" />
                                        </li>
                                        <li>
                                            <i className="ik ik-x close-card" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="card-body chat-box scrollable"
                                style={{ height: 300 }}
                            >
                                <ul className="chat-list">
                                    <li className="chat-item">
                                        <div className="chat-img">
                                            <img src="img/users/1.jpg" />
                                        </div>
                                        <div className="chat-content">
                                            <h6 className="font-medium">
                                                James Anderson
                                            </h6>
                                            <div className="box bg-light-info">
                                                Lorem Ipsum is simply dummy text
                                                of the printing &amp; type
                                                setting industry.
                                            </div>
                                        </div>
                                        <div className="chat-time">
                                            10:56 am
                                        </div>
                                    </li>
                                    <li className="chat-item">
                                        <div className="chat-img">
                                            <img src="img/users/2.jpg" />
                                        </div>
                                        <div className="chat-content">
                                            <h6 className="font-medium">
                                                Bianca Doe
                                            </h6>
                                            <div className="box bg-light-info">
                                                It’s Great opportunity to work.
                                            </div>
                                        </div>
                                        <div className="chat-time">
                                            10:57 am
                                        </div>
                                    </li>
                                    <li className="odd chat-item">
                                        <div className="chat-content">
                                            <div className="box bg-light-inverse">
                                                I would love to join the team.
                                            </div>
                                            <br />
                                        </div>
                                    </li>
                                    <li className="odd chat-item">
                                        <div className="chat-content">
                                            <div className="box bg-light-inverse">
                                                Whats budget of the new project.
                                            </div>
                                            <br />
                                        </div>
                                        <div className="chat-time">
                                            10:59 am
                                        </div>
                                    </li>
                                    <li className="chat-item">
                                        <div className="chat-img">
                                            <img src="img/users/3.jpg" />
                                        </div>
                                        <div className="chat-content">
                                            <h6 className="font-medium">
                                                Angelina Rhodes
                                            </h6>
                                            <div className="box bg-light-info">
                                                Well we have good budget for the
                                                project
                                            </div>
                                        </div>
                                        <div className="chat-time">
                                            11:00 am
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer chat-footer">
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        placeholder="Type and enter"
                                        className="form-control"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-icon btn-theme"
                                >
                                    <i className="fa fa-paper-plane" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <h4 className="card-title">
                                        Weather Report
                                    </h4>
                                    <select className="form-control w-25 ml-auto">
                                        <option>Today</option>
                                        <option value={1}>Weekly</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center flex-row mt-30">
                                    <div className="p-2 f-50 text-info">
                                        <i className="wi wi-day-showers" />
                                        <span>
                                            23<sup>°</sup>
                                        </span>
                                    </div>
                                    <div className="p-2">
                                        <h3 className="mb-0">Saturday</h3>
                                        <small>Banglore, India</small>
                                    </div>
                                </div>
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>Wind</td>
                                            <td className="font-medium">
                                                ESE 17 mph
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Humidity</td>
                                            <td className="font-medium">83%</td>
                                        </tr>
                                        <tr>
                                            <td>Pressure</td>
                                            <td className="font-medium">
                                                28.56 in
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <ul className="list-unstyled row text-center city-weather-days mb-0 mt-20">
                                    <li className="col">
                                        <i className="wi wi-day-sunny mr-5" />
                                        <span>09:30</span>
                                        <h3>
                                            20<sup>°</sup>
                                        </h3>
                                    </li>
                                    <li className="col">
                                        <i className="wi wi-day-cloudy mr-5" />
                                        <span>11:30</span>
                                        <h3>
                                            22<sup>°</sup>
                                        </h3>
                                    </li>
                                    <li className="col">
                                        <i className="wi wi-day-hail mr-5" />
                                        <span>13:30</span>
                                        <h3>
                                            25<sup>°</sup>
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ minHeight: 422 }}>
                            <div className="card-header">
                                <h3>Timeline</h3>
                                <div className="card-header-right">
                                    <ul className="list-unstyled card-option">
                                        <li>
                                            <i className="ik ik-chevron-left action-toggle" />
                                        </li>
                                        <li>
                                            <i className="ik ik-minus minimize-card" />
                                        </li>
                                        <li>
                                            <i className="ik ik-x close-card" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body timeline">
                                <div
                                    className="header bg-theme"
                                    style={{
                                        backgroundImage:
                                            'url("img/placeholder/placeimg_400_200_nature.jpg")'
                                    }}
                                >
                                    <div className="color-overlay d-flex align-items-center">
                                        <div className="day-number">8</div>
                                        <div className="date-right">
                                            <div className="day-name">
                                                Monday
                                            </div>
                                            <div className="month">
                                                February 2018
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="bullet bg-pink" />
                                        <div className="time">11am</div>
                                        <div className="desc">
                                            <h3>Attendance</h3>
                                            <h4>Computer Class</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bullet bg-green" />
                                        <div className="time">12pm</div>
                                        <div className="desc">
                                            <h3>Design Team</h3>
                                            <h4>Hangouts</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bullet bg-orange" />
                                        <div className="time">2pm</div>
                                        <div className="desc">
                                            <h3>Finish</h3>
                                            <h4>Go to Home</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header row">
                        <div className="col col-sm-3">
                            <div className="dropdown d-inline-block">
                                <a
                                    className="btn-icon checkbox-dropdown dropdown-toggle"
                                    href=""
                                    id="moreDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                />
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="moreDropdown"
                                >
                                    <a
                                        className="dropdown-item"
                                        id="checkbox_select_all"
                                    >
                                        Select All
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        id="checkbox_deselect_all"
                                    >
                                        Deselect All
                                    </a>
                                </div>
                            </div>
                            <div className="card-options d-inline-block">
                                <a href="">
                                    <i className="ik ik-inbox" />
                                </a>
                                <a href="">
                                    <i className="ik ik-plus" />
                                </a>
                                <a href="">
                                    <i className="ik ik-rotate-cw" />
                                </a>
                                <div className="dropdown d-inline-block">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href=""
                                        id="moreDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="ik ik-more-horizontal" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="moreDropdown"
                                    >
                                        <a className="dropdown-item" href="">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="">
                                            More Action
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-6">
                            <div className="card-search with-adv-search dropdown">
                                <form>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search.."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-icon"
                                    >
                                        <i className="ik ik-search" />
                                    </button>
                                    <button
                                        type="button"
                                        id="adv_wrap_toggler"
                                        className="adv-btn ik ik-chevron-down dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    />
                                    <div
                                        className="adv-search-wrap dropdown-menu dropdown-menu-right"
                                        aria-labelledby="adv_wrap_toggler"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <button className="btn btn-theme">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col col-sm-3">
                            <div className="card-options text-right">
                                <span className="mr-5">1 - 50 of 2,500</span>
                                <a href="">
                                    <i className="ik ik-chevron-left" />
                                </a>
                                <a href="">
                                    <i className="ik ik-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="list-item-wrap">
                            <div className="list-item">
                                <div className="item-inner">
                                    <label className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="item_checkbox"
                                            name="item_checkbox"
                                            defaultValue="option1"
                                        />
                                        <span className="custom-control-label">
                                            &nbsp;
                                        </span>
                                    </label>
                                    <div className="list-title">
                                        <a>
                                            Lorem Ipsum is simply dumm dummy
                                            text of the printing and typesetting
                                            industry.
                                        </a>
                                    </div>
                                    <div className="list-actions">
                                        <a href="">
                                            <i className="ik ik-eye" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-inbox" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-edit-2" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-trash-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="qickview-wrap">
                                    <div className="desc">
                                        <p>
                                            Fusce suscipit turpis a dolor
                                            posuere ornare at a ante. Quisque
                                            nec libero facilisis, egestas tortor
                                            eget, mattis dui. Curabitur viverra
                                            laoreet ligula at hendrerit. Nullam
                                            sollicitudin maximus leo, vel
                                            pulvinar orci semper id. Donec
                                            vehicula tempus enim a facilisis.
                                            Proin dignissim porttitor sem, sed
                                            pulvinar tortor gravida vitae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-inner">
                                    <label className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="item_checkbox"
                                            name="item_checkbox"
                                            defaultValue="option2"
                                        />
                                        <span className="custom-control-label">
                                            &nbsp;
                                        </span>
                                    </label>
                                    <div className="list-title">
                                        <a>
                                            Aenean eu pharetra arcu, vitae
                                            elementum sem. Sed non ligula
                                            molestie, finibus lacus at, suscipit
                                            mi. Nunc luctus lacus vel felis
                                            blandit, eu finibus augue tincidunt.
                                        </a>
                                    </div>
                                    <div className="list-actions">
                                        <a href="">
                                            <i className="ik ik-eye" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-inbox" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-edit-2" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-trash-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="qickview-wrap">
                                    <div className="desc">
                                        <p>
                                            Fusce suscipit turpis a dolor
                                            posuere ornare at a ante. Quisque
                                            nec libero facilisis, egestas tortor
                                            eget, mattis dui. Curabitur viverra
                                            laoreet ligula at hendrerit. Nullam
                                            sollicitudin maximus leo, vel
                                            pulvinar orci semper id. Donec
                                            vehicula tempus enim a facilisis.
                                            Proin dignissim porttitor sem, sed
                                            pulvinar tortor gravida vitae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-inner">
                                    <label className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="item_checkbox"
                                            name="item_checkbox"
                                            defaultValue="option3"
                                        />
                                        <span className="custom-control-label">
                                            &nbsp;
                                        </span>
                                    </label>
                                    <div className="list-title">
                                        <a>
                                            Donec lectus augue, suscipit in
                                            sodales sit amet, semper sit amet
                                            enim. Duis pretium, nisi id pretium
                                            ornare, tortor nibh sodales tellus.
                                        </a>
                                    </div>
                                    <div className="list-actions">
                                        <a href="">
                                            <i className="ik ik-eye" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-inbox" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-edit-2" />
                                        </a>
                                        <a href="">
                                            <i className="ik ik-trash-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="qickview-wrap">
                                    <div className="desc">
                                        <p>
                                            Fusce suscipit turpis a dolor
                                            posuere ornare at a ante. Quisque
                                            nec libero facilisis, egestas tortor
                                            eget, mattis dui. Curabitur viverra
                                            laoreet ligula at hendrerit. Nullam
                                            sollicitudin maximus leo, vel
                                            pulvinar orci semper id. Donec
                                            vehicula tempus enim a facilisis.
                                            Proin dignissim porttitor sem, sed
                                            pulvinar tortor gravida vitae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header row">
                        <div className="col col-sm-3">
                            <div className="card-options d-inline-block">
                                <a href="">
                                    <i className="ik ik-inbox" />
                                </a>
                                <a href="">
                                    <i className="ik ik-plus" />
                                </a>
                                <a href="">
                                    <i className="ik ik-rotate-cw" />
                                </a>
                                <div className="dropdown d-inline-block">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href=""
                                        id="moreDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="ik ik-more-horizontal" />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="moreDropdown"
                                    >
                                        <a className="dropdown-item" href="">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="">
                                            More Action
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-6">
                            <div className="card-search with-adv-search dropdown">
                                <form>
                                    <input
                                        type="text"
                                        className="form-control global_filter"
                                        id="global_filter"
                                        placeholder="Search.."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-icon"
                                    >
                                        <i className="ik ik-search" />
                                    </button>
                                    <button
                                        type="button"
                                        id="adv_wrap_toggler"
                                        className="adv-btn ik ik-chevron-down dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    />
                                    <div
                                        className="adv-search-wrap dropdown-menu dropdown-menu-right"
                                        aria-labelledby="adv_wrap_toggler"
                                    >
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control column_filter"
                                                        id="col0_filter"
                                                        placeholder="Name"
                                                        data-column={0}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control column_filter"
                                                        id="col1_filter"
                                                        placeholder="Position"
                                                        data-column={1}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control column_filter"
                                                        id="col2_filter"
                                                        placeholder="Office"
                                                        data-column={2}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control column_filter"
                                                        id="col3_filter"
                                                        placeholder="Age"
                                                        data-column={3}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control column_filter"
                                                        id="col4_filter"
                                                        placeholder="Start date"
                                                        data-column={4}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control column_filter"
                                                        id="col5_filter"
                                                        placeholder="Salary"
                                                        data-column={5}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-theme">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col col-sm-3">
                            <div className="card-options text-right">
                                <span className="mr-5" id="top">
                                    1 - 50 of 2,500
                                </span>
                                <a href="">
                                    <i className="ik ik-chevron-left" />
                                </a>
                                <a href="">
                                    <i className="ik ik-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </Fragment>
    );
}

export default React.memo(DashBoard);
