import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { chica2 } from '../img'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // [theme.breakpoints.down("sm")]:{
    //   asdasda
    // }

  },

  paper: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '10px',
    background: '#f5d884',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 10, 1),
    width: '70%',
    height: '80%',
    borderRadius: '30px',
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      padding: "5px 10px 5px 20px"
    }
  },



}));

export default function TransitionsModal({ open, handleClose, data }) {
  console.log("data", data)

  console.log("data", data?.name)
  const classes = useStyles();


  return (
    <div className={classes.caja} >
      <br />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>

          <div className={classes.paper}>
            <div>
              <h1> {data?.dueno} , Servicio confirmado! , </h1>
              <h2>
                <p>El corte que le haremos a {data?.name} es {data?.style} con {data?.accesorio}.</p>

                <p>Para hacerlo nos dijiste "{data?.recojo}" el {data?.date} y tu forma de pago será {data?.pago}. </p>

                <p>Cuando culminemos el servicio nos comunicaremos al {data?.celular}</p>

                <p>Al finalizar, verás a tu {data?.raza} y dirás OH My Dog!</p>

              </h2>
            </div>
            <img src={chica2} ></img>

          </div>

        </Fade>

      </Modal>
    </div>
  );
}

