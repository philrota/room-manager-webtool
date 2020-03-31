import React, { Component } from "react";
import image from "../assets/r2XgJ2O.jpeg";
import FindRoom from "../components/findRoom";
import FindAll from "../components/findAll";
import InsertForm from "../components/insert"
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="background" style={{ backgroundImage: `url(${image})` }}>
          &nbsp;
          <div id="shader">
            <h1>Hotel Room Manager Webtool</h1>
          </div>
        </div>
        <FindRoom />
        <FindAll />
        <InsertForm />
      </React.Fragment>
    );
  }
}
export default Home;
