import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath'



const FloorPlan = () => {
    const bedroom = {
        bedNum1: "Bedroom 1",
        bedNum2: "Bedroom 2",
        bedNum3: "Bedroom 3",
    }

    const bathroom = {
        halfBath: "Half Bath",
        fullBath: "Full Bath",
    }

    return (
        <div className="floorplan">
            <Bedroom bedroom1={bedroom.bedNum1} />
            <Kitchen />
            <Bath bathroomF={bathroom.halfBath} />
            <LivingRoom />
            <Bedroom bedroom2={bedroom.bedNum2} />
            <Bedroom bedroom3={bedroom.bedNum3} />
            <Bath bathroomH={bathroom.fullBath} />

        </div>
    )
}
//lines 16, 20, 21 is using props to configure components with their unique info
export default FloorPlan