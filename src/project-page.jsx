
import React from "react";
import Navbar from "./components/Navbar"

class Projects extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <h1>Projects</h1>
        <div className='container'>
        <div className='items'>
                <div class='card'>
                    <img src='./images/twgbam.png' width='405' height='200' className='projImg' alt='Tale of the Wand Guy Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>Tale of the Wand Guy: Back<br/>Alley Magic</h2>
                            <br/>
                            <ul>
                                <li>Worked on a team of 5 to develop an Endless<br/>
                                Runner with "reverse roguelike" aspects
                                <br/> using UE4</li>
                                <li>Created game in 7 weeks including<br/>
                                alpha and beta builds, using playtesting
                                <br/> data to improve beta</li>
                                <li>I worked on the player character including <br/>
                                feel and abilities. I also worked on several <br/>
                                minor features like sfx, intro animation, <br/>
                                and bug fixes</li>
                            </ul>
                            <br/>
                            <p> The Website for this project can be found 
                            <br/> <a href='https://twgbam.fun/' class='vidLink'>here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items'>
                <div class='card'>
                    <img src='./images/optum.jpg' width='405' height='200' className='projImg' alt='Optum Logo Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>Custom DevOps Dashboard<br/>for Optum Developers</h2>
                            <br/>
                            <ul>
                                <li>Worked on a team of 5 to develop a custom<br/>
                                DevOps Dashboard for an Optum Development<br/>Team</li>
                                <li>Used the Next.js framework for the frontend<br/>
                                and AWS services such as Lambda, API Gateway, 
                                <br/>CDK, and DynamoDB for the backend</li>
                                <li>We worked closely with the Developers to <br/>
                                ensure the dasboard was useful for debugging</li>
                            </ul>
                            <br/>
                            <p> Note the image used is not my own and can
                            <br/> be found <a href='https://mms.businesswire.com/media/20211007005785/en/761229/23/Optum%28R%29_RGB.jpg' class='vidLink'>here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items'>
                <div class='card'>
                    <img src='./images/makerspace.jpg' width='405' height='200' className='projImg' alt='Makerspace Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>Increasing Accessibility and <br/>Belonging at a Makerspace</h2>
                            <br/>
                            <ul>
                                <li>Worked on a team of 5 to foster accessibility<br/>
                                in training and diversity, equity, inclusion and<br/>
                                belonging at a local Makerspace</li>
                                <li>Interviewed Staff, Members, Instructors<br/>
                                and DEIB Specialists</li>
                                <li>Made recommendations based on the space's<br/>
                                current needs</li>
                            </ul>
                            <br/>
                            <p> Note the image used is not my own and can
                            <br/> be found <a href='https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/slates/cooper-designing-school-makerspace.jpg' class='vidLink'>here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='items'>
                <div class='card'>
                    <img src='./images/memory.jpg' width='405' height='200' className='projImg' alt='Simon Says Memory Game Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>Simon Says Memory Game</h2>
                            <br/>
                            <ul>
                                <li>Worked on a team of 5 to develop a Simon<br/>
                                Says like memory game using the MERN
                                <br/> stack</li>
                                <li>Passport.js was used for user<br/>
                                authentication</li>
                                <li>I created the GUI using animations and <br/>
                                custom made SVG's tested for accessibility <br/>
                                using lighthouse</li>
                            </ul>
                            <br/>
                            <p>A video demo of the project can be found
                            <br/> <a href='https://www.youtube.com/watch?v=Vy2hAQ_6B7Y' class='vidLink'>here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items'>
            <div class='card'>
                    <img src='./images/tale.jpg' width='405' height='200' className='projImg' alt='Tale of the Sword Guy Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>ASCII Text Game Engine<br/> + Games</h2>
                            <br/>
                            <ul>
                                <li>Developed a fully functional game engine <br/>
                                with ASCII Text based graphics using C++</li>
                                <li>Utilized Simple and Fast Multimedia Library <br/>
                                for sound, and Visual Studio for window display</li>
                                <li>Worked with a partner to develop and release <br/>
                                a game to our classmates</li>
                            </ul>
                            <br/>
                            <p>A video trailer of the final game can be found
                            <br/> <a href='https://www.youtube.com/watch?v=ww84Fs2NXpw' class='vidLink'>here</a></p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items'>
            <div class='card'>
                    <img src='./images/conway.png' width='405' height='200' className='projImg' alt='John Conways Game of Life Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>John Conway's Game of<br/> Life</h2>
                            <br/>
                            <ul>
                                <li>Built a function version of John Conway's <br/>
                                game of life in Linux using C++ using a <br/>
                                mailbox system between threads</li>
                                <li>Used Semaphores as a synchronization <br/>
                                mechanism</li>
                            </ul>
                            <br/>
                            <p>Note the image used is not my own and can
                            <br/> be found <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' class='vidLink'>here</a></p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items'>
            <div class='card'>
                    <img src='./images/overlay.png' width='405' height='200' className='projImg' alt='Overlay Network Image'/>
                    <div class='card-container'>
                        <div className='containerItems'>
                            <h2>Overlay Network with<br/> UDP Sockets</h2>
                            <br/>
                            <ul>
                                <li>Developed an overlay network on a team <br/>
                                of 2 which uses 3 end hosts and 3 routers on <br/>
                                Linux VMs </li>
                                <li>Coded using C++</li>
                                <li>Connection is established using UDP sockets </li>
                                <li>A configuration file is used to establish what <br/>
                                is a router and what is an end host</li>
                                <li>Data is sent in 1000 byte payloads</li>
                                <li>Packets consist of a manually created overlay <br/>
                                header and the payload being sent</li>
                                <li>Routers utilize Drop Tail Queuing in order to <br/>
                                avoid congestion</li>
                            </ul>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default Projects;
