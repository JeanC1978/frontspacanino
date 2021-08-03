import {SET_STEP} from "../Types"

function StepReducer(state, action) {
    const {payload, type} = action
    console.log("type",type)
    console.log("payload",payload)

    switch (type) {
        case SET_STEP:
            return {
                ...state,
                step: payload
            }
            break;
    
        default:
            return state
            break;
    }
}

export default StepReducer
