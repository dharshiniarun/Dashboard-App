import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function SideNav() {
  return (
    <div className="sidenav">
      <a href="#list" className='list'><i class="bi bi-list"></i></a>
      <a href="#home"><i className="bi bi-house-door"></i> </a>
      {/* <a href="#services"><i className="bi bi-gear"></i></a> */}
      <a href="#graph"><i class="bi bi-file-bar-graph"></i></a>
      {/* <a href="#contact"><i className="bi bi-envelope"></i></a> */}
      <a href="#clipboard"><i class="bi bi-clipboard-check"></i></a>
      <a href="#cart"><i class="bi bi-wallet2"></i></a>
      <a href="#bag"><i class="bi bi-bag-check"></i></a>
      <a href="#signout" className='signout'><i class="bi bi-box-arrow-right"></i></a>  
    </div>
  );
}

export default SideNav;
