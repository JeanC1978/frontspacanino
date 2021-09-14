import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Calendar from './Calendar';
import Boton from './Boton';

const useStyles = makeStyles({
	root: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},

	final: {
		fontFamily: 'Roboto',
		fontWeight: '400',
		color: 'rgba(0, 0, 0, 0.54)',
	},

	icon: {
		borderRadius: '50%',
		width: 16,
		height: 16,
		boxShadow:
			'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundColor: '#f5f8fa',
		backgroundImage:
			'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'$root.Mui-focusVisible &': {
			outline: '2px auto rgba(19,124,189,.6)',
			outlineOffset: 1,
		},
		'input:hover ~ &': {
			backgroundColor: '#ebf1f5',
		},
		'input:disabled ~ &': {
			boxShadow: 'none',
			background: 'rgba(206,217,224,.5)',
		},
	},
	checkedIcon: {
		backgroundColor: '#137cbd',
		backgroundImage:
			'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&:before': {
			display: 'block',
			width: 16,
			height: 16,
			backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
			content: '""',
		},
		'input:hover ~ &': {
			backgroundColor: '#106ba3',
		},
	},
});

export default function CustomizedRadios({ handleSaveData }) {
	const [values, setValues] = React.useState({
		recojo: '',
		pago: '',
		date: '',
	});

	const classes = useStyles();

	/*traer datos */
	const handleChangeInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleButtonNext = () => {
		const validacion = Object.values(values).every((value) => value != '');
		if (validacion) {
			handleSaveData(values);
		} else {
			console.log('rellenar');
		}
	};

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">Para hacerlo,como hacemos!</FormLabel>

			<br />

			<RadioGroup
				defaultValue="recojo"
				aria-label="recojo"
				name="recojo"
				value={values.style}
				onChange={handleChangeInput}
			>
				<FormControlLabel
					value="lo_dejo"
					control={<StyledRadio />}
					label="Lo dejo"
				/>

				<FormControlLabel
					value="recogelo"
					control={<StyledRadio />}
					label="Recógelo"
				/>
			</RadioGroup>
			<br />
			<p className={classes.final}>
				Selecciona la fecha y la hora del servicio
			</p>
			<Calendar date={values.date} handleChangeInput={handleChangeInput} />

			<br />

			<FormLabel component="legend">Escoge tu forma de pago</FormLabel>
			<br />
			<RadioGroup
				defaultValue="pago"
				aria-label="pago"
				name="pago"
				value={values.accesorio}
				onChange={handleChangeInput}
			>
				<FormControlLabel
					value="contraentrega"
					control={<StyledRadio />}
					label="Contra entrega"
				/>

				<FormControlLabel
					value="tarjeta"
					control={<StyledRadio />}
					label="Tarjeta"
				/>
			</RadioGroup>
			<br />
			<Boton handleClick={handleButtonNext}> Continuar </Boton>
		</FormControl>
	);
}

// Inspired by blueprintjs
function StyledRadio(props) {
	const classes = useStyles();

	return (
		<Radio
			className={classes.root}
			disableRipple
			color="default"
			checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
			icon={<span className={classes.icon} />}
			{...props}
		/>
	);
}
