import React from 'react';
import './App.css';

function Sidebar() {
    return <div id="sidebar_container">
        <img className="paperclip" src="paperclip.png" alt="paperclip" />
        <div className="sidebar">
        <h3>Practice Schedule</h3>
        <h4>Normal Schedule</h4>
        <h5>Updated: December 19th 2018</h5>
            <ul id="practice-list">
            	<li></li>
            </ul>
            <h5 style={{marginTop:"5px", padding: "0px"}}>GFR - Group Fitness Room</h5>
	    <h5 style={{padding: "0px"}}>MPR - Multi-Purpose Room</h5>
	    <h5 style={{padding: "0px"}}>MAR - Martial Arts Room</h5>
        </div>

        <img className="paperclip" src="paperclip.png" alt="paperclip" />
        <div className="sidebar">
          <h3>Contact Us</h3>
          <p>{"If you have any questions or want to contact sympoh about a jam or performance opportunity feel free to email "}
             <a href="mailto:sympoh@princeton.edu" className="no-link">sympoh@princeton.edu</a>
          </p>
        </div>

        </div>
}

export default Sidebar