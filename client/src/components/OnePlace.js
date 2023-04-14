import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useParams} from "react-router-dom";
import bookmark from '../assets/bookmark.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import validator from 'validator';


function OnePlace() {
  const places = useSelector(state => state.places.places)
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [webErrorShown, setWebErrShown] = useState(false);
  const [mapErrorShown, setMapErrShown] = useState(false);

  
  const handleWebError = () => {
    setWebErrShown(!webErrorShown)
  }
  
  const handleMapError = () => {
    setMapErrShown(!mapErrorShown)
  }
  
  function validateWebsite(url) {
    if (validator.isURL(url)) {
      return <a href={url} className='one-place-button' id='website-button' target="_blank" rel="noopener noreferrer">Website</a> 
    } else {
      return <button className='one-place-button' id='website-button-null' onClick={handleWebError}>Website</button> 
    }
  }
  
  function validateMap(url) {
    if (validator.isURL(url)) {
      return <a href={url} className='one-place-button' id='map-button' target="_blank" rel="noopener noreferrer">Directions</a> 
    } else {
      return <button className='one-place-button' id='map-button-null' onClick={handleMapError}>Directions</button> 
    }
  }
  
  const handleDelete = () => {
    fetch(`/places/${id}`, {
      method: "DELETE",
    })
    dispatch({ type: "places/deletePlace", payload: id })
    navigate('/')
  }
  
  const thisPlace = places.find(p => JSON.stringify(p.id) === id)

    return (
      <div>
        {places.length > 0 ? (
          <div id='one-place-container'>
            
            <div id='one-place-box'>
              <h2 id='one-place-name'>{thisPlace.name}</h2>
              <span id='one-bookmark'><img src={bookmark} alt='bookmark'/></span>
              <hr className='line'></hr>
              <h3 id='one-place-location'>{thisPlace.region.city}, {thisPlace.region.state}</h3>    
              <p id='one-place-activity'>• {thisPlace.activity.activity_type} •</p>
              { validateWebsite(thisPlace.website_url) }
              { validateMap(thisPlace.map_url) }
              <div className='link-err-container'>
                { webErrorShown && (<p id='web-err-mess'>Add valid website link</p>) }
                { mapErrorShown && (<p id='map-err-mess'>Add valid map link</p>) }
              </div>
              <h3 id='notes-title'>Notes</h3>
              <p id='notes-content'>{thisPlace.notes}</p>
            </div>
            <div className='edit-delete'>
              <Link to={`/places/${id}/edit`}>
                <button type='button' id='edit-place-button'>Edit Place</button>
              </Link>
              <button type='button' id='delete-place-button' onClick={handleDelete}>Delete Place</button>
            </div>

          </div>
        ) : (
          <h3>No Place Found</h3>
        )}
      </div>
    );
}
  
  export default OnePlace;