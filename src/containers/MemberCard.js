import React from 'react'
import CardFront from '../components/CardFront'

export default function MemberCard(props) {
    return <div className= "card">
        <CardFront name={props.name}/>
    </div>
}