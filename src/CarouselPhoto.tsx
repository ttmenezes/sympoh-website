import React from 'react';
import './App.css';

export interface Props {
    src: string;
    alt: string;
    description: string;
}

function CarouselPhoto(props:Props) {
    return <a className="photo" href="/">
    <img src={props.src} alt={props.alt} />
    <span>
        <b></b><br />{props.description}
    </span>
</a>
}

export default CarouselPhoto