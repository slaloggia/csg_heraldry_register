import React, { useState } from 'react'

export default function HeraldryForm() {
    const [memberName, setMemberName] = useState('')
    const [colors, setColors] = useState('')
    const [motto, setMotto] = useState('')
    const [blazon, setBlazon] = useState('')
    const [image, setImage] = useState({preview: undefined, raw: undefined})

    const handleImage = (event) => {
        setImage({
            raw: event.target.files[0],
            preview: URL.createObjectURL(event.target.files[0])
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const heraldryObj = {
            member: {name: memberName},
            heraldry: {
                colors: colors,
                blazon: blazon,
                motto: motto
            }
        }
        if (image.raw) {heraldryObj.heraldry.image = image.raw}

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(heraldryObj)
        }
        fetch('http://localhost:5000/heraldries', reqObj)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h1>Heraldry Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input value={memberName} onChange={e=>setMemberName(e.target.value)} placeholder="Full Name" />
                </label><br/>
                <label>Colors:
                    <input value={colors} onChange={e=>setColors(e.target.value)} placeholder="green, black" />
                </label><br/>
                <label>Motto:
                    <input value={motto} onChange={e=>setMotto(e.target.value)} placeholder="Ferrum Non Verbum" />
                </label><br/>
                <label>Blazon:
                    <textarea value={blazon} onChange={e=>setBlazon(e.target.value)} placeholder="Upon a Field wavy, sable and vert, a Winged Lion rampant argent, bearing a Longsword and Rapier, in Chief a row of Guinness sable"/>
                </label><br/>
                <label >Upload your shield:
                    <input type="file"  onChange={handleImage}/>
                </label>
                {image.preview ? <img src={image.preview} alt="preview of attached shield" /> : null}
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}