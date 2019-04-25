import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {/* Using the array index as the key for now, until we talk to a backend to get a real id */}
            {
                // Using explicit return so we can have multiple statements?
                props.genres.map((genre, i) => {
               return (
               <li key={i}>
                    <a 
                        href="#"
                        onClick={() => {
                            props.handleClick(genre);
                        }}
                    >
                        {genre}</a>
                </li>
               );
            })
            }
        </ul>
    );
}

export default GenreList;