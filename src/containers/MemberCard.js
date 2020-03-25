import React from 'react'
import CardFront from '../components/CardFront'

export default function MemberCard(member) {

    return <div className= "card">
        <CardFront {...member}/>
    </div>
}