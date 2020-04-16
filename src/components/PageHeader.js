import React from 'react';

export default function PageHeader() {
    return (
        <div id="page-header">
            <img src={require('../assets/csglogo.jpg')} id="logo" alt= "CSG logo" />
            <span id="title">
                <h1>Chicago Swordplay Guild</h1>
                <h2>Heraldic Register</h2>
            </span>
            <nav className="links-menu">
                <a href="/" >Home</a><br/>
                <a href="/about">About</a><br/>
                <a href="/member/myheraldry" >Add Your Heraldry</a><br/>
                <a href="/admin/newmember">Admin</a>
            </nav>
        </div>
        )
};

