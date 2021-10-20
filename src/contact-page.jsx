import React from "react";
import Navbar from "./components/Navbar"

class Contact extends React.Component {
  render() {
    return (
        <>
        <Navbar />
        <h1>Contact Information</h1>
        <br/><br/>
        <div className='contactContainer'>
            <div className='items'>
                <p>Email: <a href="mailto:jcampanale54@gmail.com">jcampanale54@gmail.com</a></p>
                <br/>
                <p>Phone Number: (774) 239-2508</p>
                <br/>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/jack-campanale-2b2607210/'>Jack Campanale</a></p>
                <br/>
                <p>GitHub: <a href='https://github.com/jcampanale'>jcampanale</a></p>
            </div>
        </div>
        <br/><br/><br/><br/>
        <h2>I look forward to working with you!</h2>
        </>
        )
    }    
}

export default Contact;