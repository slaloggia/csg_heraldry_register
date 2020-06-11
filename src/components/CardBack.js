import React from 'react'

export default function CardBack(member) {
    


    return (
        <div className="card-back" 
            style={
                {backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${member.heraldry.coat_of_arms})`}
            }
        >
            <div className="heraldry-info">
                <p className="motto">{member.heraldry && member.heraldry.motto ? `"${member.heraldry.motto}"` : null}</p>
                <p className="blazon">{member.heraldry ? member.heraldry.blazon : null}</p>
            </div>
        </div>
    )
}