import React from "react";

const Input = () => {
        const [list, setList] = React.useState([1, 2, 3]) //0: active, 1: completed

        const addToList = () => {
                setList([...list, 4])
        }

        return(
            <>
                <input onClick={() => addToList()} onKeyDown={(event) => {
                        console.log(event.target.value);
                }} placeholder='Add todo'/>

             </>
        )
}

export default Input;