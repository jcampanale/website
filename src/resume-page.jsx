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
            <iframe title='Resume PDF Viewer' src="./images/jc_resume_update_winter2022.pdf" width="60%" height="700px"/>
        </center>
        </>
        )
    }    
}

export default Resume;