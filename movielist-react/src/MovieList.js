import React, {useState, useRef} from 'react';
import Movie from './Movie';
import './index.css';
// skapa html koden
export default function MovieList() {

    const [movies, setMovies] = useState([{

        id: 1,
        title: "Star Wars",
        rating: 5
    }]);

    const titleRef = useRef();
    const ratingRef = useRef()
    
    function addNewMovie(){
        const getTitle = titleRef.current.value.trim();
        const getRating = ratingRef.current.value;

        if (getTitle === "") {
            alert ("Du måste skriva in en titel");
            return;      
        };

        if (getRating === "") {
            alert ("Du måste välja en rating");
            return;
        }

        const newMovie = { 
            id: movies.length + 1,
            title: getTitle,
            rating: parseInt(getRating),
        };

        setMovies([...movies, newMovie]);
        titleRef.current.value = "";
        ratingRef.current.value = "";

    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) =>item.id !== id));
    }

    function sortAlphabeticly() {
        const sort = [...movies].sort((a,b) => a.title.localeCompare(b.title));
        setMovies(sort);
    }

    function ratingSort() {
        const sortRating = [...movies].sort((a,b) => b.rating - a.rating);
        setMovies(sortRating);
    }


    return (
        <div>
            <label><strong>Titel:</strong></label>
            <input ref={titleRef} className="form-control" placeholder='Titel här...'/>
            <br />
            <label><strong>Betyg:</strong></label>
            <select ref={ratingRef} className = "form-control">
                <option value="">Välj betyg här...</option>
                {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
            <br/>
            <button id="addBtn" className="btn btn-success" onClick={addNewMovie}>Lägg till</button>
            <br/>
            <hr/>
            <h3>Inlagda filmer</h3>

            <ul className='list-group'>
                {movies.map(movie => <Movie key={movies.id} item ={movie} deleteMovie = {deleteMovie} />)}
            </ul>
            <hr/>
            <button id ="sortByAlphabet" className=" btn btn-primary" onClick={sortAlphabeticly}>Sortera i bokstavsordning</button>
            <button id ="sortByRating" className=" btn btn-primary" onClick={ratingSort}>Sortera baserat på betyg</button>

        </div>
    )
}