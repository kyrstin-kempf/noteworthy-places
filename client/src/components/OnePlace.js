import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useParams} from "react-router-dom";
import bookmark from '../assets/bookmark.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import validator from 'validator';


function OnePlace() {
  const regions = useSelector(state => state.regions.regions)
  const places = useSelector(state => state.places.places)
  const activities = useSelector(state => state.activities.activities)
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [webErrorShown, setWebErrShown] = useState(false);
  const [mapErrorShown, setMapErrShown] = useState(false);

  const thisPlace = places.find(p => JSON.stringify(p.id) === id )
  const thisRegion = thisPlace && regions.find(r => r.id === thisPlace.region_id)

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
      return <button className='one-place-button' id='website-button' onClick={handleWebError}>Website</button> 
    }
  }

  function validateMap(url) {
    if (validator.isURL(url)) {
      return <a href={url} className='one-place-button' id='map-button' target="_blank" rel="noopener noreferrer">Directions</a> 
    } else {
      return <button className='one-place-button' id='map-button' onClick={handleMapError}>Directions</button> 
    }
  }

  const handleDelete = () => {
    fetch(`/places/${id}`, {
        method: "DELETE",
    })
    dispatch({ type: "places/deletePlace", payload: id })
    navigate('/')
  }

  function activityMatch(activityId) {
    const act = activities.find(a => a.id === activityId)
    return act && act.activity_type
  }

    return (
      <div>
        {regions.length > 0 && thisPlace ? (
          <div id='one-place-container'>

            <div id='one-place-box'>
              <h2 id='one-place-name'>{thisPlace.name}</h2>
              <span id='one-bookmark'><img src={bookmark} alt='bookmark'/></span>
              <hr className='line'></hr>
              <h3 id='one-place-location'>{thisRegion.city}, {thisRegion.state}</h3>   
              <p id='one-place-activity'>• { activityMatch(thisPlace.activity_id) } •</p>
              { validateWebsite(thisPlace.website_url) }
              { webErrorShown && (<p>Add valid website link</p>) }
              { validateMap(thisPlace.map_url) }
              { mapErrorShown && (<p>Add valid map link</p>) }
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