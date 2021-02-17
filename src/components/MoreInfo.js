import React from 'react';

export default function MoreInfo(props){
  if (props.info){
    return (
        <div>
        <p>Выбран пользователь: <b>{props.info.firstName + " " + props.info.lastName }</b></p> 
         Описание: 
         <textarea readOnly value={props.info.description}> 
         </textarea>
         <p> Адрес проживания: <b>{props.info.address.streetAddress}</b></p> 
         <p>Город: <b>{props.info.address.city}</b></p>
         <p>Провинция/штат: <b>{props.info.address.state}</b> </p>
         <p>Индекс: <b>{props.info.address.zip}</b></p>
        </div>
    )
  }
    
    else{
        return null
    }
}