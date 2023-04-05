import React from 'react'

function Region({ user }) {

// user.regions.map((region) => <h3 key={region.id}>{region.city}, {region.state}</h3>)
// .places.map((p) => <h3 key={p.id}>{p.name}, {p.notes}</h3>)}

  const mapRegions = user.regions.map((r) => <h3 key={r.id}>{r.city}, {r.state}</h3>)
  const mapPlaces = user.places.map((p) => <p key={p.id}>{p.name}</p>)

  // if p == 

  return (
    <div>
      {mapRegions}
      {mapPlaces}
    </div>
  )

}

// "name"
// "map_url"
// "website_url"
// "notes"

// "user_id"
// "region_id"
// "activity_id"

export default Region;