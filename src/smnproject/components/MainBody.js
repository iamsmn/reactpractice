import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../containers/Home";
import ShowList from "../containers/ShowList";

class MainBody extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={ShowList} />
      </div>
    );
  }
}
export default MainBody;
