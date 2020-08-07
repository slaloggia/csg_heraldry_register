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
        const heraldryObj = new FormData()
        heraldryObj.append('member[name]', memberName)
        if (colors !== "") heraldryObj.append('heraldry[colors]', colors)
        if (motto !== "") heraldryObj.append('heraldry[motto]', motto)
        if (blazon !== "") heraldryObj.append('heraldry[blazon]', blazon)
        if (image.raw) {heraldryObj.append('heraldry[coat_of_arms]', image.raw)
        }

        const reqObj = {
            method: 'POST',
            body: heraldryObj
        }
        fetch('https://csg-heraldry-api.herokuapp.com/heraldries', reqObj)
        .then(resp => resp.json())
        .catch(error => alert(error.message))
        .then(clearForm())
    }

    const clearForm = () => {
        setMemberName("");
        setColors("");
        setMotto("");
        setBlazon("");
        setImage({preview: undefined, raw: undefined});
    }

    return (
        <div id="heraldry-form" className="form-container">
            <h1>Heraldry Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:
                    <input className="form-entry" value={memberName} onChange={e=>setMemberName(e.target.value)} placeholder="Full Name" />
                </label><br/>
                <label>Colors:
                    <input className="form-entry" value={colors} onChange={e=>setColors(e.target.value)} placeholder="ex: green, black (optional)" />
                </label><br/>
                <label>Motto:
                    <input className="form-entry" value={motto} onChange={e=>setMotto(e.target.value)} placeholder="ex: Ferrum Non Verbum (optional)" />
                </label><br/>
                <label>Blazon:
                    <textarea value={blazon} onChange={e=>setBlazon(e.target.value)} placeholder="ex: Upon a Field wavy, sable and vert, a Winged Lion rampant argent, bearing a Longsword and Rapier, in Chief a row of Guinness sable"/>
                </label><br/>
                <label >Upload your shield (optional):
                    <input className="file-upload" type="file"  onChange={handleImage}/>
                </label>
                <div id="preview-container">
                    {image.preview ? <img id="upload-preview" src={image.preview} alt="preview of attached shield" /> : null}
                </div>
                <br/>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}