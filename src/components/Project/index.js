import React from 'react';
import './Project.css'
import photo1 from "./images/PawParatzii.png";
import photo2 from "./images/RunBuddy.png";
import photo3 from "./images/WorkDayScheduler.png";
import photo4 from "./images/WorldWise.png";

function Project() {

    return (
        <section >
            <h2>Projects</h2>
            <a href="https://strayfrozen.github.io/Calendar-Application/" className='pics'> <img src={photo1}  alt="PawParatzii"/></a>
            <a href="https://strayfrozen.github.io/run-buddy/" className='pics'><img src={photo2}  alt="PawParatzii"/></a>
            <a href="https://strayfrozen.github.io/WorldWise/" className='pics'><img src={photo3}  alt="PawParatzii"/></a>
            <a href="https://fathomless-tor-55582.herokuapp.com/ " className='pics'><img src={photo4}  alt="PawParatzii"/></a>
        </section>
    );
}

export default Project;