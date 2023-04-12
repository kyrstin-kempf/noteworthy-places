import React, { useState } from "react";
import { NewLocation } from "./NewLocation";
import { NewActivity } from "./NewActivity";
import { useDispatch, useSelector } from "react-redux";

import { useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function UpdatePlace() {
    const { user }  = useSelector(state => state.user)
    const { id } = useParams();
    const regions = useSelector(state => state.regions.regions)
    const activities = useSelector(state => state.activities.activities)
    const places = useSelector(state => state.places.places)

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
// -------------------------------- EXISTING FORM VALUES
    const currentP = places.find(p => JSON.stringify(p.id) === id)
    const currentLo = regions.find(r => r.id === currentP.region_id)
    const currentLoId = currentLo.id 
    const currentAc = activities.find(a => a.id === currentP.activity_id)
    const currentAcId = currentAc.id

    const [name, setName] = useState(currentP.name);
    const [cityState, setCityState] = useState(currentLoId);
    const [websiteUrl, setWebsiteUrl] = useState(currentP.website_url);
    const [mapUrl, setMapUrl] = useState(currentP.map_url);
    const [activityType, setActivityType] = useState(currentAcId);
    const [notes, setNotes] = useState(currentP.notes);
    
    const [showAddLocation, setShowAddLocation] = useState(false)
    const [showAddActivity, setShowAddActivity] = useState(false)

    function handleUpdate(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/places", {
            method: "PATCH",
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
        setShowAddActivity(!showAddActivity)
    }

    const afterAddNewActivity = (newActivity) => {
        console.log('after', newActivity)
        dispatch({ type: "activities/addActivity", payload: newActivity })
        setActivityType(newActivity.id)
        setShowAddActivity(false)
    }

    const getActivityOptions = () => {
        const options = [
            <option key='blank' value={''}>Select an activity</option>
        ]
        activities.forEach(act => options.push(<option key={act.id} value={act.id}>{`${act.activity_type}`}</option>))
        return options
    }

    const onActivitySelect = (e) => {
        const val = e.target.value;
        if (val) setActivityType(val)
    }

    return (
        <div>

            <form className='new-place-form' onSubmit={handleUpdate}>
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