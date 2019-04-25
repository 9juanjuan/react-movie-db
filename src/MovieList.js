import React from 'react';
import PropTypes from 'prop-types';

function MovieList(props) {
    return (
        <ul>
            {
                // You can only use implicit return if you have one expression to the right 
                // of the arrow 
                props.movies.map((movie, i) => 
                (<li key={i}>
                    <a 
                    href="#"
                    onClick={() =>{
                        props.handleClick(movie);
                    }}
                >   
                    {movie}</a>
                
                 </li>
                    
                ))
            }
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList;