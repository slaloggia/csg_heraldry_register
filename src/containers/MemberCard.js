import React, { useState } from 'react'
import CardFront from '../components/CardFront'
import CardBack from '../components/CardBack'

export default function MemberCard(member) {
    const [selected, setSelected] = useState(false)

    const flipBack = () => {
        setSelected(true)
    }

    const flipFront = () => {
        setSelected(false)
    }

    return <div className= "card" id={member.id} onMouseEnter={flipBack} onMouseLeave={flipFront} onTouchStart={flipBack} onTouchEnd={flipFront}>
        {selected ?
            <CardBack {...member}/>
            :
            <CardFront {...member}/>
        }
    </div>
}