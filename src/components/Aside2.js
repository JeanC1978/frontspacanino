import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Steper from './Steper';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '200',
		},
	},
}));

// tradicional
function Aside2() {
	const [currency, setCurrency] = React.useState('USD');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};
	return (
		<div className="Aside2">
			<p className="ptext">COLOCA LOS DATOS DE TU ENGREÍDO</p>
			<div className="formulariook"></div>
		</div>
	);
}

export default Aside2;
