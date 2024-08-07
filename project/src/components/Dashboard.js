import React from "react";
import Activity from "./Activity";
import Feedback from "./Feedback";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Orders from "./Orders";

function Dashboard() {
    return(
        <>
        <nav className="navbar">
        <div className="src-input">
            <button><i class="bi bi-search"></i></button>
            <input type="search" name="search" className="search-input" placeholder="Search..." />
        </div>
        <div className="icon-input">
          <a href="#mail"><i class="bi bi-envelope-fill"></i></a>
           <a href="#settings"><i className="bi bi-gear"></i></a>
           <a href="#notifications"><i class="bi bi-bell"></i></a>
           <a href="#profile"><i class="bi bi-person-circle"></i></a>

        </div>
        </nav>
        <div className="dashboard">
            <div className="dash">
            <div className="header src-head">
                <h3>Dashboard</h3>
            </div>
            <div className="container">
                <div className="row g-0">
                    <div className="col">
                        <div className="card small-card-10">
                            <div className="card-body">
                              <h7><i class="bi bi-trash3-fill blue"></i></h7>
                                <div className="card-title">Total Orders</div>
                                <h5 className="card-text">75</h5>
                                <h14><i class="bi bi-caret-up-fill">3%</i></h14>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card small-card-10" >
                            <div className="card-body">
                             <h7><i class="bi bi-bag-check-fill green"></i></h7>
                            <div className="card-title">Total Delivered</div>
                            <h5 className="card-text">70</h5>
                            <h11><i class="bi bi-caret-down-fill"></i>3%</h11>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card small-card-10" >
                            <div className="card-body">
                                <h7><i class="bi bi-bag-x-fill red"></i></h7>
                                <div className="card-title">Total Cancelled</div>
                                <h5 className="card-text">05</h5>
                                <h11><i class="bi bi-caret-up-fill">3%</i></h11>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card small-card-10" >
                            <div className="card-body">
                            <h7><i class="bi bi-currency-dollar pink"></i></h7>
                            <div className="card-title">Total Revenue</div>
                            <h5 className="card-text">$12K</h5>
                            <h11><i class="bi bi-caret-down-fill"></i>3%</h11>
                            </div>
                        </div>
                    </div> 
                    <div class="col">
                        <div className="card big-card-28" >
                            <div className="card-body">
                            <div className="card-title">Net Profit</div>
                            <br></br>
                            <h5 className="card-text">$6759.25</h5>
                            <h11><i class="bi bi-caret-up-fill">3%</i></h11>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card big-card-40" >
                            <div className="card-body">
                                <Activity/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                            <div className="card c25" >
                                <div className="card-body">
                                <nav className="Xnavbar">
                                    <div className="container-fluid">
                                        <div>
                                            <br></br>
                                            <h1>
                                                <a className="navbar-brand" href="goals"><i class="bi bi-crosshair red"></i> Goals    <i class="bi bi-chevron-right"></i></a>
                                            </h1>
                                            <br></br>
                                        </div>
                                        <div>
                                            <br></br>
                                            <h1>
                                            <a className="navbar-brand" href="dish"><i class="bi bi-cup-hot-fill blue"></i> Popular Dishes    <i class="bi bi-chevron-right"></i></a>
                                            </h1>
                                            <br></br>
                                        </div>
                                        <div>
                                            <br></br>
                                            <h1>
                                            <a className="navbar-brand" href="menu"><i class="bi bi-menu-up green"></i> Menu    <i class="bi bi-chevron-right"></i></a>
                                            </h1>
                                            <br></br>
                                        </div>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </nav>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="row"><br></br></div>
                <div className="row">
                    <div className="col">
                        <div className="card big-card-40" >
                            <div className="card-body">
                                <div>
                                    <Orders/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card big-card-28-15" >
                            <div className="card-body">
                                <div>
                                <Feedback/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
       
        </>
    )
}

export default Dashboard;