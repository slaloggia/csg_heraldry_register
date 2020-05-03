import React from 'react'

export default function CardFront(member) {
    return (
        <div className="card-front" id={member.id}>
            <img src={member.heraldry && member.heraldry.coat_of_arms ? member.heraldry.coat_of_arms : require('../assets/shield.png')} alt="shield" className="front-img"/>
            <div className="member-info" >
                <h3 className="member-name">{member.name}</h3>
                <h5 className="guild-name">{member.guild_name ? `AKA ${member.guild_name}`  : "" }</h5>
                <div className="member-stats" >
                <p>Joined: {member.joined}</p>
                <p>Rank: {member.rank}</p>
                <p>Focus: {member.focus}</p>
                </div>
            </div>
        </div>
    )
}