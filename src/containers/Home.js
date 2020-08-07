import React, { useState, useEffect } from 'react';
import MemberCard from './MemberCard'
import { config } from '../Constants'

const member_url = config.url.API_URL_MEMBERS

export default function Home() {
    const [members, setMembers] = useState([])
    useEffect(() => {
        async function fetchData() {
            await fetch(member_url)
            .then(resp => resp.json())
            .then(data => setMembers(data.members))
        }
        fetchData();
    }, [])


    return (
        <div id="card-grid" >
            {members.map(member => (
                member.heraldry ?
                <div key={member.id}>
                    <MemberCard {...member} />
                </div>
                : null
            ))}
        </div>
    )
};

