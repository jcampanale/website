import React from "react";
import ReactDOM from "react-dom";
import Projects from "./project-page";
import "./css/projectstyle.css";

var mountNode = document.getElementById("projects");
ReactDOM.render(<Projects />, mountNode);