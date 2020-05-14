import React from 'react';

export default function PageHeader() {
    return (
        <div id="page-header">
            <div id="logo">
                <img src={require('../assets/csglogo2.png')} id="logo-img" alt= "CSG logo" />
            </div>
            <span id="title">
                <h1>Chicago Swordplay Guild</h1>
                <h2>Heraldic Register</h2>
            </span>
            <nav id="links-menu">
                <a href="/" >Home</a><br/>
                <a href="/about">About</a><br/>
                <a href="/member/myheraldry" >Add Your Heraldry</a><br/>
            </nav>
        </div>
        )
};

