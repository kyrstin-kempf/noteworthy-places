import React from "react";

function SearchBox() {
    return (
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
          <label className="filter-container">Cafés / Bites
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
          </label>

          <label className="filter-container">Restaurants
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
          </label>

          <label className="filter-container">Shopping
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
          </label>

          <label className="filter-container">Site Seeing
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
          </label>

          <label className="filter-container">Entertainment / Arts
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
          </label>

          <label className="filter-container">Outdoor Recreation
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
          </label>
          <button id="clear-filter-button">Clear</button>
          </div>
        </form>
    );
}

export default SearchBox;