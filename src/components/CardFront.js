import React from 'react'

export default function CardFront(member) {
    return (
        <div>
            <img src={require('../assets/shield.png')} alt="blank shield" className="front-img"/>
            <div className="member-info" >
                <h3>{member.name}</h3>
            </div>
        </div>
    )
}