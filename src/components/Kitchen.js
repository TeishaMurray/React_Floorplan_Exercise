import React from 'react'
import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
    console.log("Kitchen has been rendered")
    return(
        <div id="kitchen">
            <Oven />
            <Sink />
            <div id="kitchenlabel">
                Kitchen
            </div>
        </div>
    )
}

export default Kitchen