import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const PlacesList = () => {
  const regions = useSelector(state => state.places.places)
  // console.log(regions)
  
  // const regionsAsc = [...regions].sort((a, b) => a.city > b.city ? 1 : -1)
  
  return (
    <div>
      {regions.length > 0 ? (
        [...regions].sort((a, b) => a.city > b.city ? 1 : -1).map(r => {
        return <section key={r.id}>
              <h3>{r.city}, {r.state}</h3>
              {r.places.map( p => 
                <ul key={p.id}>
                    <li>{p.name}
                    <Link to={`places/${p.id}`}>
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