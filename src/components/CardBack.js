import React from 'react'

export default function CardBack(member) {
    


    return (
        <div className="card-back" 
            style={
                {backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${member.heraldry.coat_of_arms})`}
                
            }
        >
            <div className="heraldry-info">
                <p className="blazon">{member.heraldry ? member.heraldry.blazon : null}</p>
                <p className="motto">{member.heraldry && member.heraldry.motto ? member.heraldry.motto : null}</p>
            </div>
        </div>
    )
}