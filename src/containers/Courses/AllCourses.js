import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

class AllCourses extends Component {
  render() {
    let redirect = <Redirect to="/courses" />;

    return (<div>{redirect}</div>);
  }
}

export default AllCourses;
