import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SearchBox() {
  const [activity, setActivity] = useState('')
  // const [checkedRadio, setCheckedAct] = useState(false)
  // const places = useSelector(state => state.places.places)
  // const regions = useSelector(state => state.regions.regions)
  // const search = useSelector(state => state.regions.search)
  const dispatch = useDispatch();

  function searchByCity(e) {
    let input = e.target.value
    dispatch({ type: "regions/searchByCity", payload: input })
  };

  function filterByActivity(e) {
    let actId = e.target.value
    setActivity(actId)
    // dispatch({ type: "places/filterByActivity", payload: actId })
  }

  function clearFilter() {
    setActivity('')
    // setCheckedAct(null)
    // dispatch({ type: "places/clearFilter" })
  }

  // const testSearch = 'Lo'
  // // console.log(testSearch)
  // const allCities = regions.map(r => (r.city.toLowerCase()))
  // const searchTest = allCities.filter((c => {
  //   if (testSearch === ''){
  //     return c
  //   } else {
  //     return c.includes(testSearch)
  //   }
  // }))
  // console.log(searchTest)

    return (
        <div className="search-filter-form">

          <h2 className="search-title">Search By City</h2>
          <div className="search-box">
            <input
            type="search"
            name="search"
            onChange={searchByCity}
            />
          </div>

          <h2 className="search-title">Filter By Acitivity</h2>
          <div className="filter-container-box">
            <label className="filter-container">Cafés / Bites
              <input type="radio" name="activity" value='3' checked={activity === '3'} onChange={filterByActivity}/>
              <span className="checkmark"></span>
            </label>

            <label className="filter-container">Restaurants
              <input type="radio" name="activity" value='1' checked={activity === '1'} onChange={filterByActivity}/>
              <span className="checkmark"></span>
            </label>

            <label className="filter-container">Shopping
              <input type="radio" name="activity" value='2' checked={activity === '2'} onChange={filterByActivity}/>
              <span className="checkmark"></span>
            </label>

            <label className="filter-container">Site Seeing
              <input type="radio" name="activity" value='4' checked={activity === '4'} onChange={filterByActivity}/>
              <span className="checkmark"></span>
            </label>

            <label className="filter-container">Entertainment / Arts
              <input type="radio" name="activity" value='5' checked={activity === '5'} onChange={filterByActivity}/>
              <span className="checkmark"></span>
            </label>

            <label className="filter-container">Outdoor Recreation
              <input type="radio" name="activity" value='6' checked={activity === '6'} onChange={filterByActivity}/>
              <span className="checkmark"></span>
            </label>
            <button id="clear-filter-button" type="button" onClick={clearFilter}>Clear</button>
          </div>

        </div>
    );
}

export default SearchBox;