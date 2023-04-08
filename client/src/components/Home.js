import React from "react";
import SearchBox from "./SearchBox";
import PlacesList from "./PlacesList";

const Home = () => {
 
  return (
    <div>
      <div id="my-places-box">
        <h2 className="page-title">My Places</h2>
        <PlacesList />
        <div>
          <SearchBox />
        </div>
      </div>
    </div>
  )
}

export default Home;