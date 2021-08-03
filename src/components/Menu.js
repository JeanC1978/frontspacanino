import { faWeight } from '@fortawesome/free-solid-svg-icons';
import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import "../App.css";
import Sesion from './Sesion';
import { makeStyles } from '@material-ui/core/styles';
import Sand from './Sand';




// tradicional
function Menu() {
    return (
        <>
            <Hidden smDown>

                <div className="Menu"  >
                    <buttom className="buttom"> Nosotros</buttom>
                    <buttom className="buttom">Contáctanos</buttom>
                    <Sesion >Iniciar sesión</Sesion>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-pinterest"></i>

                </div>
            </Hidden >
            <Hidden mdUp>
                <Sand></Sand>
            </Hidden>
        </>

    )

}

export default Menu


// sx sm md lg


