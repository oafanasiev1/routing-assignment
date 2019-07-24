import React, { Component } from "react";
import Courses from "../containers/Courses/Courses.js";
import Course from '../containers/Course/Course.js';
import Users from "../containers/Users/Users.js";
import { NavLink, Route } from "react-router-dom";
import "./Udemy.css";

class Udemy extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Udemy">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
              </ul>
            </nav>
          </header>

            <Route path ="/users" exact component = {Users}/>
            <Route path ="/courses" exact component = {Courses}/>
            <Route path = "/courses/:id" exact component = {Course}/>
            
          
        </div>
      </React.Fragment>
    );
  }
}

export default Udemy;
