import React, { useState } from 'react'

export const NewActivity = ({ afterAddNewActivity }) => {
    const [activity, setActivity] = useState('');
    const [saving, setSaving] = useState(false)

    const onSaveActivity = () => {
        setSaving(true);
        fetch("/activities", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ activity_type: activity }),
          })
            .then((r) => {
                setSaving(false);
                if (r.ok) {
                    r.json().then((activity) => {
                        afterAddNewActivity(activity)
                    });
                }
            });
    }

    return (
        <div id='new-location-box'>
            <label htmlFor="activity">New Acitivity</label>
            <input type='text' value={activity} name="activity" onChange={(e) => setActivity(e.target.value.replace(/\b(\w)/g, k => k.toUpperCase()))} />
            <button onClick={onSaveActivity} type='button' disabled={saving} id='save-location-button'>Save</button>
        </div>
    )
}
