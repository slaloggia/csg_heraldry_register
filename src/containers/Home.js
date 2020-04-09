import React, { useState, useEffect } from 'react';
import MemberCard from './MemberCard'

export default function Home() {
    const [members, setMembers] = useState([])
    useEffect(() => {
        async function fetchData() {
            await fetch('http://localhost:5000/members')
            .then(resp => resp.json())
            .then(data => setMembers(data.members))
        }
        fetchData();
    }, [])

    return (
        <div className="flex-container">
            {members.map(member => (
                <div key={member.id}>
                    <MemberCard {...member}  />
                </div>
            ))}
        </div>
    )
};

