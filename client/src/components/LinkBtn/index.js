import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LinkBtn(props) {
  return (
    <button className="StylelinkBtn btn btn-warning" onClick={props.onClick}>
      <span> Select
        <Link className="navbar-brand" to="browse"></Link>

      </span>
    </button>
  );
}

export default LinkBtn;