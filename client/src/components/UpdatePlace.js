import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NewLocation } from "./NewLocation";

function UpdatePlace() {
    const places = useSelector(state => state.places.places)
    const regions = useSelector(state => state.regions.regions)
    const { user }  = useSelector(state => state.user)
    const { id } = useParams();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const currentP = places.find(p => JSON.stringify(p.id) === id)

    const [name, setName] = useState(currentP.name);
    const [cityState, setCityState] = useState("");
    const [showAddLocation, setShowAddLocation] = useState(false)
    const [websiteUrl, setWebsiteUrl] = useState(currentP.website_url);
    const [mapUrl, setMapUrl] = useState(currentP.map_url);
    const [activityType, setActivityType] = useState("");
    const [notes, setNotes] = useState(currentP.notes);


    function handleUpdate(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                map_url: mapUrl,
                website_url: websiteUrl,
                notes,
                user_id: user.id,
                region_id: cityState,
                activity_id: activityType,
            }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((place) => {
                    dispatch({ type: "places/updatePlace", payload: place })
                })
                navigate('/')
            }
            else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    const onAddNewLocation = () => {
        setShowAddLocation(!showAddLocation)
    }

    const afterAddNewLocation = (newLocation) => {
      dispatch({ type: "regions/addRegion", payload: newLocation })
      setCityState(newLocation.id)
      setShowAddLocation(false)
    }

    const getLocationOptions = () => {
        const options = [
            <option key='blank' value={''}>Select a location</option>
        ]
        regions.forEach(location => options.push(<option key={location.id} value={location.id}>{`${location.city}, ${location.state}`}</option>))
        return options
    }

    const onCityStateSelect = (e) => {
        const val = e.target.value;
        if (val) setCityState(val)
    }

    return (
        <div>
            <form className='new-place-form' >
            <h1 className="page-title">Edit Place</h1>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                
                <div className="row">
                    <div className="col-75">
                        <label htmlFor="city">City, State / Country</label>
                        <select 
                        value={cityState} 
                        onChange={onCityStateSelect}
                        id="city"
                        >
                            {getLocationOptions()}
                        </select>
                    </div>
                    <div className="col-25">
                        <button onClick={onAddNewLocation} type="button" className="add-location-button">Add Location</button>
                    </div>
                </div>
                {showAddLocation && <NewLocation afterAddNewLocation={afterAddNewLocation} />}
                
                <label htmlFor="website_url">Website URL</label>
                <input
                type="text"
                id="website_url"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                />

                <label htmlFor="map_url">Map URL</label>
                <input
                type="text"
                id="map_url"
                value={mapUrl}
                onChange={(e) => setMapUrl(e.target.value)}
                />

                <label htmlFor="acitivity_type">Acitivity Type</label>
                <select 
                value={activityType} 
                onChange={e => setActivityType(e.target.value)}
                id="activity_type"
                >
                    <option value={''}>Select an activity</option>
                    <option value={1}>Restaurants</option>
                    <option value={2}>Shopping</option>
                    <option value={3}>Cafés / Bites </option>
                    <option value={4}>Site Seeing</option>
                    <option value={5}>Entertainment / Arts</option>
                    <option value={6}>Outdoor Recreation</option>
                </select>

                <label htmlFor="notes">Notes</label>
                <textarea
                type="text"
                id="notes"
                rows="5"
                columns="50"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                />

                <button type="submit" className="submit-button">
                    {isLoading ? 'Loading...' : 'Save'}
                </button>

                <div className='login-error'>
                    {errors?.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div>

            </form>
        </div>
    );
}
     

 
export default UpdatePlace;