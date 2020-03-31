import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { handleClick } from "../utils/handleClick";
function FindRoom() {
  return (
    <div id="search-form">
      <Input
        placeholder="Type the room number"
        variant="filled"
        color="secondary"
        id="filled-secondary"
        type="text"
      />
      <Button
        variant="contained"
        color="secondary"
        id="btn"
        type="button"
        onClick={handleClick}
      >
        Find
      </Button>
      <Button
        variant="contained"
        color="secondary"
        id="btnC"
        type="button"
        
      >
        Clear
      </Button>
      <div
        id="data-render"
        style={{ backgroundColor: "white", opacity: 0.7 }}
      ><ul id="list"></ul></div>
    </div>
  );
}
export default FindRoom;
