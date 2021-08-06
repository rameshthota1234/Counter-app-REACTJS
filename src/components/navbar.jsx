import React, { Component } from 'react';

// Stateless Funtional Component
const NavBar = ({totalCounters})=> {
     return ( 
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
              Counter with ReactJS{" "} 
              <span className="badge badge-pill badge-secondary">
              {totalCounters}
              </span>
            </a>
        </nav>
         );
    };



 
export default NavBar ;
