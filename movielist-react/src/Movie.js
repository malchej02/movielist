import React from "react";
import deleteBtn from './images/delete.png'

// skriver ut en lista med alla filmer
export default function Movie(props){
    return (
        <li className="list-group-item">
            {props.item.title}

            <button className="btn delete float-end" onClick={() => {props.deleteMovie(props.item.id)}}>
                <img src={deleteBtn} alt ="delete-knapp"/>
            </button>
        </li>
    )
}