import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
  const [activity, setActivity] = useState('')
  const activities = useSelector(state => state.activities.activities)
  const dispatch = useDispatch();

  function searchByCity(e) {
    let input = e.target.value
    // console.log(input)
    dispatch({ type: "places/searchByCity", payload: input })
  };

  function filterByActivity(e) {
    let actId = e.target.value
    setActivity(actId)
    dispatch({ type: "places/filterByActivity", payload: actId })
  }

  function clearFilter() {
    setActivity('')
    // setCheckedAct(null)
    dispatch({ type: "places/clearFilter" })
  }

  const activitiesCopy = [...activities]
  const orderA = activitiesCopy.sort((a, b) => a.activity_type > b.activity_type ? 1 : -1)

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

          <h2 className="search-title" id="filter-title">Filter By Acitivity</h2>
          <div className="filter-container-box">
            {orderA.map(a => {
              return <label className="filter-container" key={a.id}>{a.activity_type}
                      <input type="radio" name="activity" value={a.id} checked={activity === JSON.stringify(a.id)} onChange={filterByActivity}/>
                      <span className="checkmark"></span>
                    </label>
            })}

            <button id="clear-filter-button" type="button" onClick={clearFilter}>Clear</button>
          </div>

        </div>
    );
}

export default SearchBox;