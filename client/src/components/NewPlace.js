import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { userSelector } from "../redux/usersSlice";
import { useNavigate } from 'react-router-dom';

function NewPlace() {
    const [name, setName] = useState("");
    // const [city, setCity] = useState("");
    // const [stateCountry, setStateCountry] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [mapUrl, setMapUrl] = useState("");
    const [activityType, setActivityType] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const { user } = useSelector(userSelector)

    // const regionOptions = user.map(r => console.log(r))

    // function activityID(act) {
    //     if(act === "Restaurants") {
    //         return 1
    //     } else if (act === "Shopping") {
    //         return 2
    //     } else if (act === "Cafes / Bites") {
    //         return 3
    //     } else if (act === "Site Seeing") {
    //         return 4
    //     } else if (act === "Entertainment / Arts") {
    //         return 5
    //     } else if (act === "Outdoor Recreation") {
    //         return 6
    //     }
    // } 

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
                <label htmlFor="city">City, State / Country</label>
                
                <button>+ Add New Location</button>
                <br></br>
                <br></br>
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
                <select 
                value={activityType} 
                onChange={e => setActivityType(e.target.value)}
                id="activity_type"
                >
                    <option>Restaurants</option>
                    <option>Shopping</option>
                    <option>Cafés / Bites </option>
                    <option>Site Seeing</option>
                    <option>Entertainment / Arts</option>
                    <option>Outdoor Recreation</option>
                </select>
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