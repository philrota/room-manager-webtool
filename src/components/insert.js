import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class InsertForm extends Component {
  state = {
    num: null,
    beds: null,
    occupiedBy: null,
    occupiedFrom: null,
    occupiedTo: null
  };
  handleRoomChange = e => {
    this.setState({ num: e.target.value });
  };
  handleBedsChange = e => {
    this.setState({ beds: e.target.value });
  };
  handleClientChange = e => {
    this.setState({ occupiedBy: e.target.value });
  };
  handleArriveChange = e => {
    this.setState({ occupiedFrom: e.target.value });
  };
  handleDepartureChange = e => {
    this.setState({ occupiedTo: e.target.value });
  };
  handleSubmit = e => {
    const obj = {
      num: this.state.num,
      beds: this.state.beds,
      occupiedFrom: this.state.occupiedFrom,
      occupiedTo: this.state.occupiedTo,
      occupiedBy: this.state.occupiedBy,
      isFull: true
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const strfied = JSON.stringify(obj);
    console.log(strfied);
    fetch(
      `${proxy}https://europe-west1-hotel-room-manager.cloudfunctions.net/api/insertRoom`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: strfied
      }
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        document.querySelector(
          "#ReqRes"
        ).textContent = `Room ${this.state.num} has been inserted correctly!`;
      });
  };
  render() {
    return (
      <div id="form">
        <form method="POST">
          <Input
            placeholder="Type the room number"
            variant="filled"
            color="secondary"
            id="filled-secondary"
            type="text"
            name="num"
            onChange={this.handleRoomChange}
          />
          <br />
          <Input
            placeholder="Description of the room"
            variant="filled"
            color="secondary"
            id="filled-secondary"
            type="text"
            name="beds"
            onChange={this.handleBedsChange}
          />
          <br />
          <Input
            placeholder="Client"
            variant="filled"
            color="secondary"
            id="filled-secondary"
            type="text"
            name="occupiedBy"
            onChange={this.handleClientChange}
          />
          <br />
          <Input
            placeholder="Arrive"
            variant="filled"
            color="secondary"
            id="filled-secondary"
            type="text"
            name="occupiedFrom"
            onChange={this.handleArriveChange}
          />
          <br />
          <Input
            placeholder="Departure"
            variant="filled"
            color="secondary"
            id="filled-secondary"
            type="text"
            name="occupiedTo"
            onChange={this.handleDepartureChange}
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            id="btn3"
            type="button"
            onClick={this.handleSubmit}
          >
            Insert Room
          </Button>
        </form>
        <p id="ReqRes"></p>
      </div>
    );
  }
}

export default InsertForm;
