import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Boton from './Boton';

const currencies = [
	{
		value: 'Escoge',
		label: 'Escoge aquí',
	},
	{
		value: 'Chico',
		label: 'Pequeño',
	},
	{
		value: 'Mediano',
		label: 'Mediano',
	},
	{
		value: 'Grande',
		label: 'Grande',
	},
];

const currenciesTwo = [
	{
		value: 'Escoge_raza',
		label: 'Selecciona',
	},
	{
		value: 'GoldenRetriever',
		label: 'Golden Retriever',
	},
	{
		value: 'Cocker',
		label: 'Cocker',
	},
	{
		value: 'FoxTerrier',
		label: 'Fox Terrier',
	},
	{
		value: 'Perroperuano',
		label: 'Perro peruano',
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			with: '30%',
		},
	},
}));

// tradicional
function Aside2({ handleSaveData }) {
	const [values, setValues] = React.useState({
		name: '',
		raza: '',
		peso: '',
		dueno: '',
		celular: '',
		tamano: '',
	});
	const classes = useStyles();

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
		<>
			<div>
				<FormControl>
					<TextField
						id="NombreCan"
						name="name"
						value={values.name}
						onChange={handleChangeInput}
						label="Nombre de tu engreído"
						variant="outlined"
						size="small"
					/>
					<br />

					<TextField
						id="Raza"
						select
						name="raza"
						label="Raza"
						size="small"
						values={values.raza}
						onChange={handleChangeInput}
						SelectProps={{
							native: true,
						}}
						helperText=" "
						variant="outlined"
					>
						{currenciesTwo.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</TextField>
					<br />

					<TextField
						id="outlined-select-currency-native"
						select
						name="tamano"
						label="Tamaño"
						size="small"
						values={values.tamano}
						onChange={handleChangeInput}
						SelectProps={{
							native: true,
						}}
						helperText=" "
						variant="outlined"
					>
						{currencies.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</TextField>
					<TextField
						id="Peso"
						name="peso"
						value={values.peso}
						onChange={handleChangeInput}
						label="¿Cúal es su peso?"
						variant="outlined"
						size="small"
					/>

					<br />
					<span>Cuál es tu nombre</span>
					<br />

					<TextField
						id="Dueno"
						name="dueno"
						value={values.dueno}
						onChange={handleChangeInput}
						label="¿Cúal es tu nombre?"
						variant="outlined"
						size="small"
					/>
					<br />
					<TextField
						id="CelDueno"
						name="celular"
						value={values.celular}
						onChange={handleChangeInput}
						label="¿Cúal es tu celular?"
						variant="outlined"
						size="small"
					/>
					<br />

					<Boton handleClick={handleButtonNext}> Continuar </Boton>
				</FormControl>
			</div>
		</>
	);
}

export default Aside2;
