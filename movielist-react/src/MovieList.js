import React, {useState, useRef} from 'react';
import Movie from './Movie';
// skapa html koden
export default function MovieList() {

    const [movies, setMovies] = useState([{

        id: 1,
        title: "movie 1"

    }]);
    
    function addNewMovie(){
    const input = document.querySelector("input");
    const getTitle = input.value.trim();

    if (getTitle === "") {
        alert ("Du måste skriva in en titel");
        return;      
    };

    const newMovie = { 
        id: movies.length + 1,
        title: getTitle
    };

    setMovies([...movies, newMovie]);
    input.value = "";

    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) =>item.id !== id));
    }


    return (
        <div>
            <legend><strong>Titel:</strong></legend>
            <input className="form-control" placeholder='Titel här...'/>
            <br />
            <legend><strong>Betyg :</strong></legend>
            <select id='betyg' className = "form-control">
            <option value = "">Betyg:</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            </select>
            <br/>
            <button id="addBtn" className="btn btn-success" onClick={addNewMovie}>Lägg till</button>
            <br/>
            <hr/>
            <h3>Inlagda filmer</h3>

            <ul className='list-group'>
                {movies.map(movie => <Movie key={movies.id} item ={movie} deleteMovie = {deleteMovie} />)}
            </ul>

        </div>
    )
}