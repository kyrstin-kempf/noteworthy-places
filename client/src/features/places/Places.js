import React from 'react';
import { useSelector } from 'react-redux';

function Places() {
    const places = useSelector((state) => state.places);

    return (
        <div>
            <ul>
                {places.map((place) => (
                    <li key={place.id}>{place.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Places;