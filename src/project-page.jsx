
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
        </div>
      </>
    );
  }
}

export default Projects;
