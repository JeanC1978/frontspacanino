import React from 'react'
import "../App.css"
import {logosc} from "../img"

// tradicional
function Header () {
    return (
        <div className="Header" sx sm md lg >
            <img className="logor" src={logosc} ></img> 
        </div>

    )

}

export default Header
