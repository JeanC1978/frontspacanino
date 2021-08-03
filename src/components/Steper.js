import React, { useContext } from 'react';
import { Button, StepLabel, Stepper, Typography, makeStyles, Step, } from '@material-ui/core';
import Dataform from "./DataForm";
import Styleform from "./StyleForm";
import DateForm from "./DateForm";
import Modal from "./Modal";
import { Rowing } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import StepContext from "../context/Step/StepContext"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  backButton: {
    marginRight: theme.spacing(1),

  },
  instructions: {

    padding: '10px',
    color: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Poppins',


  },
  rootJean: {
    background: "#d2ced8",
    paddingTop: '5px',
  },

  reinicio: {
    background: "#f0da9e",
    padding: '2px 2px 2px 2px',
    border: '1px solid black',
    borderRadius: '8px',
    fontWeight: '700',
    fontFamily: 'Poppins',
  },

  alinear: {
    display: 'grid',
    gridrow: '1 fr',
    textItems: 'center',

  },

  button: {
    background: "#69f5a8",
    padding: '2px 2px 2px 2px',
    borderRadius: '10px',
    fontWeight: '700',
    fontFamily: 'Poppins',
    boxShadow: '0px 10px 20px grey',
  },


}));

function getSteps() {
  return ['Datos', 'Estilo', 'Cita'];
}



export default function MyCustomSteper() {
  const { setStep } = useContext(StepContext)
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [values, setValues] = React.useState({})

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSaveData = (data) => {
    setValues({ ...values, ...data })
    handleNext()
    console.log("activeStep", activeStep)
    setStep(activeStep + 1)
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Dataform handleSaveData={handleSaveData} />;
      case 1:
        return <Styleform handleSaveData={handleSaveData} />;
      case 2:
        return <DateForm handleSaveData={handleSaveData} />;
      default:
        return 'Unknown stepIndex';
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <div>
      <Stepper sx sm md lg activeStep={activeStep} alternativeLabel classes={{ root: classes.rootJean }}>
        {steps.map((label) => (
          <Step alternativeLabel classes={{ root: classes.circleact }} key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


      <div className={{ root: classes.alinear }}>
        {activeStep === steps.length ? (
          <div className={classes.alinear}>


            <Typography className={classes.instructions}> ¡Gracias por completar el formulario! </Typography>
            <br />
            <Button className={classes.reinicio} onClick={handleReset}>Reiniciar</Button>
            <br />
            <button className={classes.button} onClick={handleOpenModal}>
              <span><p>MIRA LOS DATOS DEL SERVICIO AQUI</p> {<Icon>send</Icon>}</span>
            </button>
            <Modal open={openModal} handleClose={handleCloseModal} data={values} />
          </div>
        ) : (
          <div>
            <>{getStepContent(activeStep)}</>
            <div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
