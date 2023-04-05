import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlaces } from "../actions/placesActions";
import { Place } from "../components/Place";

// import SearchBox from "../components/SearchBox";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../actions";
// import { decrement } from "../actions";

const Home = ({ dispatch, loading, places, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPlaces())
  }, [dispatch])

  const renderPlaces = () => {
    if (loading) return <p>Loading...</p>
    if (hasErrors) return <p>Unable to display places.</p>
    return places.map((place) => <Place key={place.id} place={place} />)
  }

  return (
    <section>
      <h1>Places</h1>
      {renderPlaces()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.places.loading,
  places: state.places.places,
  hasErrors: state.places.hasErrors,
})

// function Home({ loading, places, hasErrors }) {
//   const counter = useSelector(state => state.counter);
//   const greeting = useSelector(state => state.greeting);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div id="my-places-box">
//         <h2 className="page-title">My Places</h2>
//         {counter}
//         <button onClick={() => dispatch(increment(2))}>+</button>
//         <button onClick={() => dispatch(decrement())}>-</button>
//         <br></br>
//         <button onClick={greeting ? <p>Hello</p> : ''}>Click Me!</button>
//         <p>Hello</p>
        
//       </div>
//       <div>
//         <SearchBox />
//       </div>
//     </div>
//   );
// }

export default connect(mapStateToProps)(Home);