import React, { useState } from 'react'
import CardFront from '../components/CardFront'
import CardBack from '../components/CardBack'

export default function MemberCard(member) {
    const [displayFront, setdisplayFront] = useState(true)

    const handleClick = () => {
        setdisplayFront(!displayFront)
    }

    return <div className= "card" id={member.id} onClick={handleClick}>
        {displayFront ?
            <CardFront {...member}/> :
            <CardBack {...member}/>
        }
    </div>
}