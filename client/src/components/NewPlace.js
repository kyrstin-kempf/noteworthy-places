import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function NewPlace() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [stateCountry, setStateCountry] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [mapUrl, setMapUrl] = useState("");
    const [activityType, setActivityType] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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
                user_id: 13,
                region_id: 2,
                activity_id: 3,
            }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json()
                navigate('/')
            }
            else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
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
                <label htmlFor="city">City</label>
                <input
                type="text"
                id="city"
                placeholder="Berlin"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="city">State / Country</label>
                <input
                type="text"
                id="state"
                placeholder="Germany"
                value={stateCountry}
                onChange={(e) => setStateCountry(e.target.value)}
                />
                {/* <select id="region" name="region" placeholder="Berlin, Germany">
                    <option value="empty"></option>
                    <option value="Berlin, Germany">Berlin, Germany</option>
                    <option value="Boulder, CO">Boulder, CO</option>
                    <option value="Washington, DC">Washington, DC</option>
                    <option value="add_region" id="new-location-option">+ Add New Location</option>
                </select> */}
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
                <label htmlFor="acitivity_type">Acitivity Type</label>
                <input
                type="text"
                id="activity_type"
                placeholder="Restaurants"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
                />
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
                    {isLoading ? 'Loading...' : 'Add Place'}
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