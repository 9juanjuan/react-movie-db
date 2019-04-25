import React from 'react';
import PropTypes from 'prop-types'

function ActorList(props) {
    return (
        <ul>
            {/* Using the array index as the key for now, until we talk to a backend to get a real id */}
            {
                props.actors.map(actor=> <li>{actor}</li>)
            }
        </ul>
    );
}
ActorList.propTypes= {
    actors: PropTypes.array.isRequired
}

export default ActorList;