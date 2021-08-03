
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Steper  from "./Steper";
import StyleForm  from "./StyleForm";


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '200',
      },
    },
  }));

// tradicional
function Aside2 () {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('USD');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    return (
    <>
        <p className="ptext"  >COLOCA LOS DATOS DE TU ENGREÍDO</p>
        <div className="formulario" >
      <Steper />
        </div>
    </>

    )
}

export default Aside2