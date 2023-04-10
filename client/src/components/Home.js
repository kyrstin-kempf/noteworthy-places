import React from "react";
import SearchBox from "./SearchBox";
import PlacesList from "./PlacesList";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector(state => state.user)

  return (
    <div>
      <div id="my-places-box">
        <h2 className="page-title">My Places</h2>
          { user ? <PlacesList /> : null}
        <div>
          <SearchBox />
        </div>
      </div>
    </div>
  )
}

export default Home;