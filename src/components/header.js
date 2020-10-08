import React from 'react'

import logo from '../assets/logo.png';

function header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo-img" />
        </header>
    )
}


export default header

