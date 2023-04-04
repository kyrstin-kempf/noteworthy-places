import React from "react";
// import { useNavigate } from 'react-router-dom';

function NewPlace() {
    return (
        <div>
            <form className='new-place-form'>
            <h1 className="page-title">New Place</h1>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                placeholder="DAO Thai Restaurant"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                type="text"
                id="city"
                placeholder="Berlin"
                // value={city}
                // onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="state">State/Country</label>
                <input
                type="text"
                id="state"
                placeholder="Germany"
                // value={state} 
                // onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="website_url">Website URL</label>
                <input
                type="url"
                id="website_url"
                placeholder="https://dao-restaurant.de/"
                // value={websiteUrl}
                // onChange={(e) => setWebsiteUrl(e.target.value)}
                />
                <label htmlFor="map_url">Map URL</label>
                <input
                type="url"
                id="map_url"
                placeholder="https://goo.gl/maps/ovnXzMCpeTG3nZJx9"
                // value={mapUrl}
                // onChange={(e) => setMapUrl(e.target.value)}
                />
                <label htmlFor="acitivity_type">Acitivity Type</label>
                <input
                type="url"
                id="activity_type"
                placeholder="Restaurants"
                // value={activityType}
                // onChange={(e) => setActivityType(e.target.value)}
                />
                <label htmlFor="notes">Notes</label>
                <textarea
                type="text"
                id="notes"
                rows="5"
                columns="50"
                placeholder="Best Thai food ever! The teas also have real flowers. We went twice while in Berlin."
                // value={notes}
                // onChange={(e) => setNotes(e.target.value)}
                />
                <button type="submit" className="submit-button">
                    {/* {isLoading ? 'Loading...' : 'Submit'} */}
                    Submit
                </button>
                {/* <div className='login-error'>
                    {errors?.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div> */}
            </form>
        </div>
    );
}
 
export default NewPlace;