import React from 'react' 

const Bedroom = (props) => {
    // console.log(props)
    return(
        <div className="bedroom" id="bed-${props.bedroom}">
            {props.bedroom1} 
            {props.bedroom2}
            {props.bedroom3}
        </div>
    )
}

export default Bedroom