import React, { useState } from 'react';
import './pagination.css';

export default function Pagination(props){
    function onClickHandler(event){
        props.checkButtons(event.target.id)
        console.log(event.target.id)
    }
    if(props.isloaded!="done"|| props.howmanyPages < 2){
        return null
    } else{
        let pagelist=Array.apply(null, { length: props.howmanyPages }).map((item, idx) => (
            <li key={idx}>
             <button onClick={onClickHandler} id={idx}>
               {idx+1}
             </button>
             </li>
           ));
         return(
          <ul className="pagelist">
              {pagelist}
          </ul>
         )
    }
}