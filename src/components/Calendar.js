import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    
    display: 'flex',
    flexWrap: 'wrap',
    background:'#dfdff2',
    borderRadius:'10px',
    padding:'10px',
    
  },

  textField: {
    
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: '1px',
    width: '250px',
    
    // fontSize:'20pt',
  },


}));

export default function DateAndTimePickers({date,handleChangeInput}) {
  const classes = useStyles();

  
  return (
    
    <form className={classes.container} noValidate sx sm md lg>
      <TextField
        id="datetime-local"
        label=" "
        type="datetime-local"
        // format="MM/dd/yyyy"
        defaultValue="2021-06-16T09:00"
        className={classes.textField}
        name="date"
        value={date}
        onChange={handleChangeInput}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
