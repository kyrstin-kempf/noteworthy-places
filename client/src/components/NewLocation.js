import React, { useState } from 'react'

export const NewLocation = ({ afterAddNewLocation }) => {
    const [city, setCity] = useState('');
    const [state, setState] = useState("");
    const [saving, setSaving] = useState(false)

    const onSaveLocation = () => {
        setSaving(true);
        fetch("/regions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ city, state }),
          })
            .then((r) => {
                setSaving(false);
                if (r.ok) {
                    r.json().then((location) => {
                        afterAddNewLocation(location)
                    });
                }
            });
    }

    return (
        <div id='new-location-box'>
            <label htmlFor="city">New City</label>
            <input type='text' value={city} name="city" onChange={(e) => setCity(e.target.value.replace(/\b(\w)/g, k => k.toUpperCase()))} />
            <label htmlFor="city">New State / Country</label>
            <input type='text' value={state} name="state" onChange={(e) => setState(e.target.value.replace(/\b(\w)/g, k => k.toUpperCase()))} />
            <button onClick={onSaveLocation} type='button' disabled={saving} id='save-location-button'>Save</button>
        </div>
    )
}
