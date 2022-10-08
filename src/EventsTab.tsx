import React from 'react';
import './App.css';

import VideoSpec from './VideoSpec';
import AllVids from './VideoData';

function Video(props:VideoSpec) {
    return <a 
        className="video" 
        rel="video" 
        href={props.src} 
        title={props.title}>
            {props.text}
        </a>
}

function join<T1,T2>(array:T1[],separator:T2) {
    let acc : (T1|T2)[] = [];
    array.forEach(e => {
        acc.push(e);
        acc.push(separator)
    });
    acc.pop();
    return acc;
}

interface EventProps {
    title:string;
    year:number;
    vids:VideoSpec[];
}
function Event(props:EventProps) {
return <li>
    {`${props.title} (${props.year}) -`}
    {join(props.vids.map(Video)," - ")}
    </li>
}

function EventsTab() {
    return <div id="content">
        <h1>Our Events</h1>
        <ul>
        <h2>Spring Shows</h2>
        <ul>
            {AllVids.map(Event)}
        </ul>
        </ul>

    </div>
  
}

export default EventsTab