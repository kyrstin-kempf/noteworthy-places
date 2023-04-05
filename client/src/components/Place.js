import React from 'react'

export const Place = ({ place }) => (
  <article>
    <h3>{place.name}</h3>
    <p>{place.notes}</p>
    <p>{place.map_url}</p>
    {/* <p>{region.city}</p> */}
  </article>
)

// "name"
// "map_url"
// "website_url"
// "notes"

// "user_id"
// "region_id"
// "activity_id"