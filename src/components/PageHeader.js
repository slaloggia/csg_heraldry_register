import React from 'react';

export default function PageHeader() {
    return (
        <div id="page-header">
            <img src={require('../assets/csglogo.jpg')} id="logo" alt= "CSG logo" />
            <h1>Chicago Swordplay Guild</h1>
            <h2>Heraldic Register</h2>
        </div>)
};

