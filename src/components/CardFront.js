import React from 'react'

export default function CardFront(member) {
    return (
        <div>
            <img src={member.heraldry && member.heraldry.coat_of_arms ? member.heraldry.coat_of_arms : require('../assets/shield.png')} alt="blank shield" className="front-img"/>
            <div className="member-info" >
                <h3>{member.name}</h3>
                {member.guild_name ? <h5>AKA {member.guild_name}</h5> : null}
                <div className="member-stats" >
                <p>Joined: {member.joined}</p>
                <p>Rank: {member.rank}</p>
                <p>Focus: {member.focus}</p>
                </div>
            </div>
        </div>
    )
}