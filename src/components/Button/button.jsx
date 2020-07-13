import React from "react";

const Button = (props) => {
    const {onClick} = props;
    return(
        <button onClick={onClick}>Add</button>
    )
}

export default Button