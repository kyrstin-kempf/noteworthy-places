import React from "react";

function Home() {
  
  return (
    <div>
      <div id="my-places-box">
        <h2 className="page-title">My Places</h2>

      </div>
      <div>
        <form className="search-filter-form">
          <label htmlFor="search" className="search-title">Search By City
          <input
          type="search"
          id="search"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          />
          </label>
          <h2 className="search-title">Filter By Acitivity</h2>
          <div className="filter-container-box">
          <label class="filter-container">Cafés / Bites
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
          </label>

          <label class="filter-container">Restaurants
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
          </label>

          <label class="filter-container">Shopping
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
          </label>

          <label class="filter-container">Site Seeing
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
          </label>

          <label class="filter-container">Entertainment / Arts
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
          </label>

          <label class="filter-container">Outdoor Recreation
            <input type="radio" name="radio"/>
            <span class="checkmark"></span>
          </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;