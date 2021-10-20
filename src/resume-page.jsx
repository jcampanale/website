import React from "react";
import Navbar from "./components/Navbar"

class Resume extends React.Component {
  render() {
    return (
        <>
        <Navbar />
        <h1>Resume</h1>
        <br/><br/>
        <center>
            <iframe title='Resume PDF Viewer' src="./images/jcampanale_resume_fall2021 - Copy.pdf" width="60%" height="700px"/>
        </center>
        </>
        )
    }    
}

export default Resume;