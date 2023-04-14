import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import bookmark from '../assets/bookmark.png';

export const PlacesList = () => {
  const places = useSelector(state => state.places.places)
  const placesCopy = [...places]
  const sortedPlaces = places && placesCopy.sort((a, b) => a.region.city > b.region.city ? 1 : -1)  

  return (
    <div>
      {places.length > 0 ? (
        sortedPlaces.map((p) => (
          <section key={p.id}>
            <div className='location-name-box'>
              <h3 className='location-name'>{p.region.city}, {p.region.state}</h3>
              <span className='location-bookmark'><img src={bookmark} alt='bookmark'/></span>
            </div>
          
              <div className='row-home' key={p.id}>	

                <div className='col-30'>
                  <ul>
                    <li>{p.name}</li>
                  </ul>
                </div>

                <div className='col-30'>
                  <p>{p.activity.activity_type}</p>
                </div>

                <div className='col-30'>
                  <Link to={`/places/${p.id}`}>
                  <button type='button' id='details-button'>Details</button>
                  </Link> 
                </div>

              </div>

          </section>
        ))
      ) : (
        <div>
          <h2>No Places Found</h2>
        </div>
      )}
    </div>
  );
}

export default PlacesList;