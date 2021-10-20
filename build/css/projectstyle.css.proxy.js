// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    color: white;\r\n}\r\n.Navbar{\r\n    background: linear-gradient(90deg, black 0%, black 100%);\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-menu{\r\n    display: grid;\r\n    grid-template-columns: repeat(5, auto);\r\n    grid-gap: 10px;\r\n    list-style: none;\r\n    text-align: center;\r\n}\r\n\r\n.nav-links{\r\n    text-decoration: none;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.nav-links:hover{\r\n    color: gold;\r\n    border-bottom: 2px solid gold;\r\n}\r\n\r\nbody{\r\n    background: linear-gradient(90deg, black 50%, black 50%);\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.items{\r\n    justify-content: center;\r\n    margin: 3%;\r\n}\r\n\r\n.containerItems{\r\n    padding-top: 1%;\r\n}\r\n\r\n.projImg{\r\n    border-radius: 5px;\r\n}\r\n\r\n.card {\r\n    border:3px solid gray;\r\n    transition: 0.3s;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n.card-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 2px 16px;\r\n  justify-content: center;\r\n}\r\n\r\nh1{\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    font-size: 32pt;\r\n    text-decoration: underline;\r\n    text-underline-position: under;\r\n}\r\n\r\nh2{\r\n    color: black;\r\n    font-size: 20pt;\r\n    border-top: 3px solid black;\r\n}\r\n\r\nli{\r\n    color: black;\r\n}\r\n\r\np{\r\n    color: black;\r\n}\r\n\r\n.vidLink{\r\n    color: black;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}