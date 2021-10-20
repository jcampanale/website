import React from "react";
import ReactDOM from "react-dom";
import Resume from "./resume-page";
import "./css/resumestyle.css";

var mountNode = document.getElementById("resume");
ReactDOM.render(<Resume />, mountNode);