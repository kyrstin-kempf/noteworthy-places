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
        <div>
            <div>NewLocation</div>
            <input type='text' value={city} name="city" onChange={(e) => setCity(e.target.value)} />
            <input type='text' value={state} name="state" onChange={(e) => setState(e.target.value)} />
            <button onClick={onSaveLocation} type='button' disabled={saving}>Save location</button>
        </div>
    )
}
