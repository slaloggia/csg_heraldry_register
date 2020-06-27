import React, { useState } from 'react'


export default function AddMemberForm() {
    const [auth, setAuth] = useState(false)
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [guildName, setGuildName] = useState('')
    const [joined, setJoined] = useState('')
    const [rank, setRank] = useState('')
    const [focus, setFocus] = useState('')

    const handleAuth = (event) => {
        event.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({password: password})
        }
        fetch('https://csg-heraldry-api.herokuapp.com//auth', reqObj)
        .then(resp => resp.json())
        .then(data => data.auth === "Authorized" ? setAuth(true) : alert(data.auth))
    }

    const clearForm = () => {
        setName("");
        setGuildName("");
        setJoined("");
        setRank("");
        setFocus("");
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const memberObj = {
            name: name,
            guild_name: guildName,
            joined: parseInt(joined),
            rank: rank,
            focus: focus
        }
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(memberObj)
        }

        

        fetch('https://csg-heraldry-api.herokuapp.com//members', reqObj)
        .then(resp => resp.json())
        .catch(error => alert(error.message))
        .then(data => alert(
            data.error ? "Member failed to save" : `Member saved: ${data.member.name}`
        ))
        .then(() => clearForm())
    }
    

    return (
        
        <div id="member-form" className="form-container">
            <h1>Add Member</h1>
            {auth ?
            <form className="form" onSubmit= {handleSubmit}>
                <label>Name: 
                    <input className="form-entry" value={name} placeholder="Full Name" onChange={e => setName(e.target.value)} />
                </label>
                <br/>
                <label>Guild Name: 
                    <input className="form-entry" value={guildName} placeholder="e.g. Scooter, HP, etc." onChange={e => setGuildName(e.target.value)}/>
                </label>
                <br/>
                
                <label>Year Joined: 
                    <select value={joined} onChange={e => setJoined(e.target.value)} >
                        <option value= '0' key='0'></option>
                        {listYearOptions()}
                    </select>
                </label>
                
                <br/>
                <label>Rank: 
                    <select value={rank} onChange={e => setRank(e.target.value)} >
                        <option value=''></option> 
                        <option value="Scholar">Scholar</option>
                        <option value="Free Scholar">Free Scholar</option>
                        <option value="Provost" >Provost</option>
                        <option value="Dean" >Greg</option>
                    </select>
                </label>
                <br/>
                <fieldset onChange={e => setFocus(e.target.value)} >
                <legend>Focus: </legend>
                    <label >Renaissance 
                    <input id="Renaissance" type="radio" value="Renaissance" name="focus" checked={focus === "Renaissance"}/>
                    </label><br/>
                    <label>Medieval
                    <input id="Medieval" type="radio" value="Medieval" name="focus" checked={focus === "Medieval"} />
                     </label>
                </fieldset>
                <br/>
                <button className="submit" type="Submit">Submit</button>
            </form>
            :
            <form className="form" onSubmit={handleAuth}>
                <label>Enter Admin Password: 
                <input className="form-entry" id="admin-password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button className="submit" type="Submit">Submit</button>
            </form>
            }
        </div>

    )
}

function listYearOptions() {
    const today = new Date()
    const currentYear = today.getFullYear()
    let y = 1999
    let years =[]
    while (y <= currentYear) {
       years.push(y)
       y++
    }

    return years.map(yr => <option value={yr} key={yr}>{yr}</option>)

}