import { Hidden } from '@material-ui/core';
import React from 'react';
import '../App.css';
import Sesion from './Sesion';
import Sand from './Sand';
import { logosc } from '../img';

// tradicional
function Menu() {
	return (
		<div className="Nav">
			<div className="Header" sx sm md lg>
				<img className="logor" alt="auto" with="auto" src={logosc}></img>
			</div>

			<Hidden smDown>
				<div className="Menu">
					<i class="fab fa-facebook-f"></i>
					<i class="fab fa-instagram"></i>
					<i class="fab fa-youtube"></i>
					<i class="fab fa-pinterest"></i>
					<buttom className="buttom"> Nosotros</buttom>
					<buttom className="buttom">Contáctanos</buttom>
					<Sesion>Iniciar sesión</Sesion>
				</div>
			</Hidden>
			<Hidden mdUp>
				<Sand></Sand>
			</Hidden>
		</div>
	);
}

export default Menu;
