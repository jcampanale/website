
import React from "react";
import Navbar from "./components/Navbar"

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className='rightHalf'></div>
        <body>
          <div className='leftHalf'>
            <div className='items'>
              <h1>Jack Campanale</h1>
              <br/><br/>
              <p>Computer Science and Game Development student at WPI</p>
              <br/><br/><br/><br/><br/>
              <h2>About Me</h2>
              <br/><br/>
              <p>Hi! My name is Jack Campanale and I am currently studying at WPI to<br/>
                complete a dual BS in Computer Science and Game Development. I am<br/> 
                interested in summer internships involving Software Engineering,<br/>
                or programming for games!
              </p>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default App;
