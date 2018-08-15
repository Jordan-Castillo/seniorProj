import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.svg';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css';
class Navbar extends React.Component{
   render(){
      return(
         <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">around</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
             </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                    <a className="nav-link" href='#' >Home </a>
                 </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">Link</a>
                 </li>
                <li className="nav-item">
                   <a className="nav-link" href="#">Disabled</a>
                </li>
             </ul>
            </div>
         </nav>
      )
   }
};

export default Navbar;