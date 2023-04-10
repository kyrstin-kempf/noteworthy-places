import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import UpdatePlace from './UpdatePlace';


function OnePlace() {
  const regions = useSelector(state => state.places.places)
  const { id } = useParams();
  const [isShown, setIsShown] = useState(false);


  const placesOnly = regions.map(r => r.places.map(p => p)).flat(1)
  const thisPlace = placesOnly.find(p => JSON.stringify(p.id) === id )
  const thisRegion = regions.find(r => r.id === thisPlace.region_id)

  const handleClick = () => {
    setIsShown(!isShown)
};
  
    return (
      <div>
        {regions.length > 0 ? (
          <div id='one-place-container'>
            <div id='one-place-box'>
				<h2>{thisPlace.name}</h2>
				<hr></hr>
				<h3>{thisRegion.city}, {thisRegion.state}</h3>   
				<a href={thisPlace.website_url} className='one-place-button' id='website-button' target="_blank" rel="noopener noreferrer">Website</a>  
				<a href={thisPlace.map_url} className='one-place-button' id='map-button' target="_blank" rel="noopener noreferrer">Directions</a>  
				<h3>Notes</h3>
				<p>{thisPlace.notes}</p>
            </div>
            <div>
				<button type='button' id='edit-place-button' onClick={handleClick}>Edit Place</button>
				{ isShown && <UpdatePlace 
				id={id}
				name={thisPlace.name}
				city={thisPlace.city}
				state={thisPlace.state}
				websiteUrl={thisPlace.website_url}
				mapUrl={thisPlace.map_url}
				activity={thisPlace.activity_id}
				notes={thisPlace.notes}
				/> }
            </div>
          </div>
        ): (
          <h3>No Place Found</h3>
        )}
      </div>
    );
}
  
  export default OnePlace;