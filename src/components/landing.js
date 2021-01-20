import React from 'react';
import '../App.css';
import logo from '../images/logo1.png';
import avatar from '../images/profile-avatar.png';

function Landing () {

    return (
        <div className="landing-wrapper">
      <nav className = "navbar" >
          <img src = { logo } className = "logo" />
          <ul>
            <li><a href = "#" >Home</a></li>
            <li><a href = "#" >About Me</a></li>
            <li><a href = "#" >Resume</a></li>
            <li><a href = "#" >Projects</a></li>
            <li><a href = "#" >Contact</a></li>
          </ul>
      </nav>
      <div className = "landing" >
      <img src = {avatar} className = "avatar" ></img>
      
      <h1>Software Developer</h1>  
      <p className = "tech" > {'{HTML} | {CSS} | {React} | {JavaScript} | {JQuery} | {C#} | {SQL Sever}'}</p>
      
      <div className="social"> 
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>
                  
      </div>
      </div>
    </div>
    );
}

export default Landing;

