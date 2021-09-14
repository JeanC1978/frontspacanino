import React from 'react'
import { canlineal } from '../img'

// tradicional
function Content () {
    return (
        <div className="Content" sx sm md lg >
            <p className="p">¡Relájate un minuto y acompáñanos <br />
            para descubrir el <span className="span">Spa canino!</span></p>
            <img src={canlineal} alt="auto" width="150"></img> 
        </div>
    )
}

export default Content
