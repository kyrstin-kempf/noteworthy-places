import React from "react";
import SearchBox from "../components/SearchBox";

function Home() {
  
  return (
    <div>
      <div id="my-places-box">
        <h2 className="page-title">My Places</h2>
        
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
}

export default Home;