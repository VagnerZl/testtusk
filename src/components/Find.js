import React, { useState } from 'react';


export default function Find(props){
const [value,setValue]=useState("")

function inputHandler(e){
    setValue(e.target.value)
}

function findData(){
let result = props.data.filter(function(item){
 let firstNameCheck=item.firstName.toLowerCase().includes(value.toLowerCase())
 let lastNameCheck=item.lastName.toLowerCase().includes(value.toLowerCase())
 let emailCheck =item.email.toLowerCase().includes(value.toLowerCase())
 let idCheck =String(item.id).toLowerCase().includes(value.toLowerCase())
 let phoneCheck =item.phone.toLowerCase().includes(value.toLowerCase())
 if(firstNameCheck||lastNameCheck||emailCheck||idCheck||phoneCheck){
     return true
 }
 else return false
})
props.filtrData(result)
setValue("")
}

 return(
    <div>
        <input onChange={inputHandler} value={value} type="text" placeholder="search..."/>
        <button onClick={findData}>Найти</button>
    </div>

 )

}