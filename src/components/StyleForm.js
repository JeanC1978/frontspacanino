import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Boton from './Boton';

const useStyles = makeStyles({
	root: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
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
			outlineOffset: 2,
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

	final: {
		background: 'yellow',
		padding: '10px',
		fontFamily: 'Poppins',
		fontWeight: '700',
		borderRadius: '20px',
	},
});

export default function CustomizedRadios({ handleSaveData }) {
	/*crear un estado */
	const [values, setValues] = React.useState({
		style: '',
		accesorio: '',
	});

	const classes = useStyles();

	/*traer datos */
	const handleChangeInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value, //e.target.checked
		});
	};

	const handleButtonNext = () => {
		const validacion = Object.values(values).every((value) => value != '');
		console.log('values style', values);
		if (validacion) {
			handleSaveData(values);
		} else {
			console.log('rellenar');
		}
	};

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">Escoge su estilo</FormLabel>

			<RadioGroup
				defaultValue="estilo"
				aria-label="estilo"
				name="style"
				value={values.style}
				onChange={handleChangeInput}
			>
				<FormControlLabel
					value="casual"
					control={<StyledRadio />}
					label="Casual"
				/>
				<FormControlLabel value="glam" control={<StyledRadio />} label="Glam" />
				<FormControlLabel
					value="sport"
					control={<StyledRadio />}
					label="Sport"
				/>
				<FormControlLabel value="fit" control={<StyledRadio />} label="Fit" />
			</RadioGroup>

			<FormLabel component="legend">Accesorios</FormLabel>

			<RadioGroup
				defaultValue="accesorios"
				aria-label="Accesorios"
				name="accesorio"
				value={values.accesorio}
				onChange={handleChangeInput}
			>
				<FormControlLabel
					value="corbata"
					control={<StyledRadio />}
					label="Corbata"
				/>
				<FormControlLabel value="mono" control={<StyledRadio />} label="Moño" />
				<FormControlLabel
					value="listones"
					control={<StyledRadio />}
					label="Listones"
				/>
			</RadioGroup>
			<br />
			{/* <button onClick={() => handleSaveData(values)}>next</button> */}
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
