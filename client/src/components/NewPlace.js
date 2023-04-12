import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NewLocation } from "./NewLocation";
import { NewActivity } from "./NewActivity";
import { useDispatch, useSelector } from "react-redux";

function NewPlace({}) {
    const { user }  = useSelector(state => state.user)
    const regions = useSelector(state => state.regions.regions)
    const activities = useSelector(state => state.activities.activities)

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [name, setName] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [mapUrl, setMapUrl] = useState("");
    const [cityState, setCityState] = useState("");
    const [activityType, setActivityType] = useState("");
    const [notes, setNotes] = useState("");
    
    const [showAddLocation, setShowAddLocation] = useState(false)
    const [showAddActivity, setShowAddActivity] = useState(false)
    
    /*useEffect(() => {
        console.log('in effect')
        setLocations(regions)
    }, [regions])*/

    function handleSubmit(e) {
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
                    dispatch({ type: "places/addNewPlace", payload: place })
                })
                navigate('/')
            }
            else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    // --------------------------------------------- LOCATION
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

    // --------------------------------------------- ACTIVITY
    const onAddNewActivity = () => {
        setShowAddActivity(!setShowAddActivity)
    }

    const afterAddNewActivity = (newActivity) => {
        dispatch({ type: "activities/addActivity", payload: newActivity })
        setActivityType(newActivity.id)
        setShowAddActivity(false)
    }

    const getActivityOptions = () => {
        const options = [
            <option key='blank' value={''}>Select an activity</option>
        ]
        activities.forEach(act => options.push(<option key={act.id} value={act.id}>{`${act.city}, ${act.state}`}</option>))
        return options
    }

    const onActivitySelect = (e) => {
        const val = e.target.value;
        if (val) setActivityType(val)
    }

    return (
        <div>
            <form className='new-place-form' onSubmit={handleSubmit}>
            <h1 className="page-title">New Place</h1>

                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                placeholder="DAO Thai Restaurant"
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
                placeholder="https://dao-restaurant.de/"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                />

                <label htmlFor="map_url">Map URL</label>
                <input
                type="text"
                id="map_url"
                placeholder="https://goo.gl/maps/ovnXzMCpeTG3nZJx9"
                value={mapUrl}
                onChange={(e) => setMapUrl(e.target.value)}
                />

                <div className="row">
                    <div className="col-75">
                        <label htmlFor="acitivity_type">Activity Type</label>
                        <select 
                        value={activityType} 
                        onChange={onActivitySelect}
                        id="activity_type"
                        >
                            {getActivityOptions()}
                        </select>
                    </div>
                    <div className="col-25">
                        <button onClick={onAddNewActivity} type="button" className="add-location-button">Add Activity</button>
                    </div>
                </div>
                {showAddActivity && <NewActivity afterAddNewActivity={afterAddNewActivity} />}

                {/* <label htmlFor="acitivity_type">Acitivity Type</label>
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
                </select> */}

                <label htmlFor="notes">Notes</label>
                <textarea
                type="text"
                id="notes"
                rows="5"
                columns="50"
                placeholder="Best Thai food ever! The teas also have real flowers. We went twice while in Berlin."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                />

                <button type="submit" className="submit-button">
                    {isLoading ? 'Loading...' : '+ Add Place'}
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
 
export default NewPlace;