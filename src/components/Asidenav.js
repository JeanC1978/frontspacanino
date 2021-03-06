import React, {useContext} from 'react'
import { chica1, chica3, chica4, chica5, } from '../img'
import StepContext from "../context/Step/StepContext";


// tradicional
function Asidenav () {
    // const classes = useStyles()
    const { step } = useContext(StepContext)

    console.log("step",step)

    const getImage = () => {
        switch (step) {
            case 0:
                return <img className="Asidenav" src={chica1} /> 
                break;
                
            case 1:
                return <img className="Asidenav" src={chica4} />
                break;
            
            case 2:
                    return <img className="Asidenav" src={chica5} />
                    break;

            case 3:
                        return <img className="Asidenav" src={chica3}/>
                        break;
            default:
                return <img className="Asidenav" src={chica1} />
                break;
        }
    }

    return (
        <div sx sm md lg className="Asidenav " >
            {
                getImage()
            }
            
        </div>
    )
}

export default Asidenav