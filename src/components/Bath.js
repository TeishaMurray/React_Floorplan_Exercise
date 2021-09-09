import React from "react"; 

const Bath = (props) => {
    // console.log("bath rendered")
    // console.log(props)
    return(
        <div className="bath">
            {props.bathroomF}
            {props.bathroomH}
        </div>
    )
}

export default Bath