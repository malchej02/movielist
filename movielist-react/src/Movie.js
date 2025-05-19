import './index.css';
import React from "react";
import deleteBtn from './images/delete.png'
import starIcon from './images/star.png'

// skriver ut en lista med alla filmer
export default function Movie(props){
    const stars = [];

    for (let i = 0; i < props.item.rating; i++) {
        stars.push(<img key={i} className='star-icon' src={starIcon} alt='star' />);
    }

    return (
        <li className="movie-item">
            {props.item.title}
            <img className='delete-movie-icon' src={deleteBtn} alt='delete-knapp' onClick={() => props.deleteMovie(props.item.id)} />
            {stars}
        </li>
    )
}