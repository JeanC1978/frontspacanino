import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		backgroundColor: 'indigo',
		color: 'white',
		display: 'flex',
	},
}));

export default function IconLabelButtons({ handleClick }) {
	const classes = useStyles();

	return (
		<div>
			{/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
			<Button
				onClick={handleClick}
				variant="contained"
				// color="secondary"
				className={classes.button}
				endIcon={<Icon>send</Icon>}
			>
				Continuar
			</Button>
		</div>
	);
}
