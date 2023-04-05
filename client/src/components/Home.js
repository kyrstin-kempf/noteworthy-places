import React, { useEffect } from "react";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, userSelector } from "../redux/userSlice";
import Region from './Region.js'

const Home = () => {
  const dispatch = useDispatch();
  const { user, loading, hasErrors } = useSelector(userSelector)

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const renderUserRegions = () => {
    if (loading) return <p>Loading...</p>
    if (hasErrors) return <p>Unable to display regions.</p>
    
    return <Region user={user} />
  }

  return (
    <div>
      <div id="my-places-box">
        <h2 className="page-title">My Places</h2>
        {renderUserRegions()}
        <div>
          <SearchBox />
        </div>
      </div>
    </div>
  )
}

export default Home;