import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const PlacesList = () => {
  const places = useSelector(state => state.places.places)
  const regions = useSelector(state => state.regions.regions)
  const activities = useSelector(state => state.activities.activities)
  
  // console.log(places)
  // console.log(regions)
  // console.log(activities)

  // const regionsAsc = [...regions].sort((a, b) => a.city > b.city ? 1 : -1)
  // console.log(regionsAsc)

  function activityMatch(activityId) {
      const act = activities.find(a => a.id === activityId)
      return act.activity_type
  }

  return (
    <div>
      {regions.length > 0 ? (
        [...regions].sort((a, b) => a.city > b.city ? 1 : -1).map(r => {
        return <section key={r.id}>
              <h3>{r.city}, {r.state}</h3>
              {places.filter(place => place.region_id === r.id).map(p =>
                <ul key={p.id}>
                    <li>{p.name} | { activities.length > 0 ? activityMatch(p.activity_id) : <p>No activities found</p> }
                    <Link to={`/places/${p.id}`}>
                      <button type='button' id='details-button'>Details</button>
                    </Link> 
                    </li>
                </ul>)
                }
            </section>
        }) ) : (
          <p>No Places Found</p>
        )}
    </div>
  )
}

export default PlacesList;