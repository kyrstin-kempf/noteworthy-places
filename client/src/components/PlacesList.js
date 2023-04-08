import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const PlacesList = () => {
  const regions = useSelector(state => state.data.regions)

  const regionsAsc = [...regions].sort((a, b) => a.city > b.city ? 1 : -1);
  // console.log(citiesDescending);

  return (
    <div>
      {regionsAsc.map(r => {
        return <section key={r.city}>
              <h3>{r.city}, {r.state}</h3>
              {r.places.map( p => 
                <ul key={p.id}>
                    <li>{p.name} 
                    <Link to={`/places/${p.id}`}>
                      <button id='details-button'>Details</button>
                    </Link>
                    </li>
                </ul>)
                }
            </section>
        })
      }
    </div>
  )
}

export default PlacesList;