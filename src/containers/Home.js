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

    return <div>
        {members.map(member => <MemberCard props={member} key={member.id} />)}
    </div>
};

