import React from 'react';
import './App.css';
import CarouselPhoto from './CarouselPhoto';


function HomeTab() {
    return <div id="content">
    
    <h1>SYMPOH - A BBoy/BGirl Community</h1>

    <div id="photos" style={{border: "2px solid #ccc"}}>
            <CarouselPhoto 
              src="carousel/full_sympoh_2016.jpg"
              alt="Sympoh Ice Breakers"
              description="Current and former members of Sympoh together after the 2016 spring show Ice Breakers!"
            />
    </div>

    <h2>How to Join Sympoh</h2>
 
    <p>Becoming a member starts with auditions, which are held in the fall and spring each year. 
    Be on the lookout for Fall auditions!</p></div>
  
}

export default HomeTab