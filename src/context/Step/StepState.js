import React, { useReducer } from "react";
import StepContext from "./StepContext";
import StepReducer from "./StepReducer";

const StepState = (props) => {

    const  initialState = {
        step:0
    }

    const [state, dispatch] = useReducer(StepReducer, initialState)

    const setStep = (payload) => {
        dispatch({type:"SET_STEP", payload})
    }

    return (
        <StepContext.Provider value={{
                step: state.step,
                setStep,
            }}>
                {props.children}
        </StepContext.Provider>

    )
    
}

export default StepState