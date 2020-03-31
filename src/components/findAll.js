import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class FindAll extends Component {
  state = { stateData: null, isLoading: false };

  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://europe-west1-hotel-room-manager.cloudfunctions.net/api/rooms`;
    const btn2 = document.querySelector("#btn2");
    const clear = document.querySelector("#clear");

    btn2.addEventListener("click", () => {
      this.setState({ isLoading: true });
      if (this.state.isLoading === true) {
        btn2.textContent = "Fetching data...";
      }
      fetch(api)
        .then(res => res.json())
        .then(data => {
          this.setState({ stateData: data });
          this.state.stateData.forEach(el => {
            const l = document.createElement("li");
            const list2 = document.querySelector("#list2");
            document.querySelector("#showdata").style.display = "block";

            l.style.color = "black";
            l.setAttribute("class", "result");
            list2.appendChild(l);
            clear.addEventListener("click", () => {
              l.remove();
              document.querySelector("#showdata").style.display = "none";
            });
            this.setState({ isLoading: false });
            if (this.state.isLoading === false) {
              btn2.textContent = "Show the entire room list";
            }

            l.textContent =
              "Room " +
              el.num +
              " Beds: " +
              el.beds +
              " Client: " +
              el.occupiedBy +
              " From: " +
              el.occupiedFrom +
              " to: " +
              el.occupiedTo;
          });
        });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="contained" color="secondary" id="btn2" type="button">
          Show the entire room list
        </Button>
        <Button variant="contained" color="secondary" id="clear" type="button">
          Clear results
        </Button>
        <div id="showdata" style={{ color: "white" }}>
          <ul id="list2"></ul>
        </div>
      </React.Fragment>
    );
  }
}

export default FindAll;
