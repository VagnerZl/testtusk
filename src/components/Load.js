import React, { useState } from 'react';



function Load( props ){
    
    const [data, setdata] = useState(null)
    const [error, setError] = useState(null);

    function getData (){
        props.updateData(null, true)
        fetch(props.url)
        .then(res => res.json())
        .then(
            (result) => {
              props.updateData(result, "done")
            },
            (error) => {
              setError(error);
              props.updateData(null, "error")
            }
        )
    }
    return(
        <button disabled={props.butdiss} onClick={getData}> {props.name } </button>
    )
 }

export default  Load