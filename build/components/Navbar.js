import React, {Component} from "../_snowpack/pkg/react.js";
const navitems = [
  {
    label: "Home",
    url: "/index.html",
    cName: "nav-links"
  },
  {
    label: "Projects",
    url: "./Projects.html",
    cName: "nav-links"
  },
  {
    label: "Resume",
    url: "./Resume.html",
    cName: "nav-links"
  },
  {
    label: "Contact",
    url: "./Contact.html",
    cName: "nav-links"
  }
];
class Navbar extends Component {
  render() {
    return /* @__PURE__ */ React.createElement("nav", {
      className: "Navbar"
    }, /* @__PURE__ */ React.createElement("ul", {
      className: "nav-menu"
    }, navitems.map((item, index) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: index
      }, /* @__PURE__ */ React.createElement("a", {
        className: item.cName,
        href: item.url
      }, item.label));
    })));
  }
}
export default Navbar;
