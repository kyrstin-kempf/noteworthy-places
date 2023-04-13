import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import bookmark from '../assets/bookmark.png';

export const PlacesList = () => {
  const places = useSelector(state => state.places.places)
  const regions = useSelector(state => state.regions.regions)
  const activities = useSelector(state => state.activities.activities)

  function activityMatch(activityId) {
      const act = activities.find(a => a.id === activityId)
      return act && act.activity_type
  }

  function getUserPlaces() {
      const groupedPlaces =  places.reduce((obj, place) => {
        obj[place.region_id] ||= [] // region_id 1 { 1: []}
        obj[place.region_id].push(place)
        return obj
      }, {});

    const data = [];
    [...regions].sort((a, b) => a.city > b.city ? 1 : -1).forEach(r => {
      const regionPlaces = groupedPlaces[r.id];
      if (regionPlaces && regionPlaces.length > 0) {
        data.push(<section key={r.id}>
          <div className='location-name-box'>
            <h3 className='location-name'>{r.city}, {r.state}</h3>
            <span className='location-bookmark'><img src={bookmark} alt='bookmark'/></span>
          </div>
          {regionPlaces.map(p =>
          <div className='row-home' key={p.id}>	
      
          <div className='col-30'>
            <ul>
              <li>{p.name}</li>
            </ul>
          </div>
          <div className='col-30'>
            <p>{ activities.length > 0 ? activityMatch(p.activity_id) : 'No activities found' }</p>
          </div>
          <div className='col-30'>
            <Link to={`/places/${p.id}`}>
            <button type='button' id='details-button'>Details</button>
            </Link> 
          </div>

            </div>
          )}
        </section>)
      }
    })     

    return data
  }

  return (
    <div>
      {regions.length > 0 ? getUserPlaces() : (
          <p>No Places Found</p>
        )}
    </div>
  )
}

export default PlacesList;