import React, { Component, Suspense } from "react";
import Course from "../containers/Course/Course.js";
import { NavLink, Route, Switch } from "react-router-dom";
import AllCourses from "../containers/Courses/AllCourses.js";
import "./Udemy.css";

const Users = React.lazy(() => import("../containers/Users/Users.js"));
const Courses = React.lazy(() => import("../containers/Courses/Courses.js"));

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
                <li>
                  <NavLink to="/all-courses">All Courses</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route
              path="/users"
              exact
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Users />
                </Suspense>
              )}
            />
            <Route
              path="/courses"
              exact
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Courses />
                </Suspense>
              )}
            />

            <Route path="/courses/:id" exact component={Course} />

            <Route path="/all-courses" exact component={AllCourses} />

            <Route render={() => <h1>Not found!</h1>} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Udemy;
