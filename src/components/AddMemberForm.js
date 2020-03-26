import React, { useState } from 'react'


export default function AddMemberForm() {
    const [name, setName] = useState('')
    const [guildName, setGuildName] = useState('')
    const [joined, setJoined] = useState('')
    const [rank, setRank] = useState('')
    const [focus, setFocus] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let memberObj = {
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

        fetch('http://localhost:5000/members', reqObj)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    

    return (
        <div>
            <h1>Add Member</h1>
            <form onSubmit= {handleSubmit}>
                <label>Name: 
                    <input value={name} placeholder="Full Name" onChange={e => setName(e.target.value)} />
                </label>
                <br/>
                <label>Guild Name: 
                    <input value={guildName} placeholder="e.g. Scooter, HP, etc." onChange={e => setGuildName(e.target.value)}/>
                </label>
                <br/>
                <label>Year Joined: 
                    <select value={joined} onChange={e => setJoined(e.target.value)} >
                        {listYearOptions()}
                    </select>
                </label>
                <br/>
                <label>Rank: 
                    <select value={rank} onChange={e => setRank(e.target.value)} >
                        <option value="Scholar">Scholar</option>
                        <option value="Free Scholar">Free Scholar</option>
                        <option value="Provost" >Provost</option>
                        <option value="Dean" >Greg</option>
                    </select>
                </label>
                <br/>
                <label>Focus: 
                    <select value={focus} onChange={e => setFocus(e.target.value)} >
                        <option value="Renaissance">Renaissance</option>
                        <option value="Medieval">Medieval</option>
                    </select>
                </label>
                <br/>
                <input type="Submit" />
            </form>
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