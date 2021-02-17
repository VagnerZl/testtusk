import React, { useEffect, useState } from 'react';
import MoreInfo from './MoreInfo';
import './table.css';
import Add from "./Add";
import Find from "./Find";

function Table(props) {
  const [item, setItem] = useState(false )
  const [data, setdata] = useState(props.data);
  const [idsort, setidsort] = useState("")
  const [firstNamesort, setfirstNamesort] = useState("")
  const [lastNamesort, setlastNamesort] = useState("")
  const [emailsort, setemailsort] = useState("")
  const [phonesort, setphonesort] = useState("")

useEffect(() => {
  setdata(props.data)
  setidsort("")
  setfirstNamesort("")
  setlastNamesort("")
  setemailsort("")
  setphonesort("")
}, [props.data])


  let datakey=0
    let tableItems=data.map((item,index) =>
      <tr datakey={index} key={index}>
         <td>{item.id}</td>
         <td>{item.firstName}</td>
         <td>{item.lastName}</td>
         <td>{item.email}</td>
         <td>{item.phone}</td>
     </tr>
       );
    

  function showData(event){
    if (event.target.parentNode.hasAttribute("datakey")){
      let targetId= event.target.parentNode.getAttribute("datakey")
      setItem(data[targetId])
      }
   } 
    

  function sortId(e) {
  if(idsort==""||idsort=="по убыванию"){
    let sorted=[].concat(props.data)
    sorted.sort(function(a, b) {
      return a.id - b.id;
      });
    setdata(sorted)
    setidsort("по возрастанию")
    }else{
      let sorted=[].concat(props.data)
      sorted.sort(function(a, b) {
        return b.id - a.id;
        });
    setdata(sorted)
    setidsort("по убыванию")
    }
  }

      function sortfirstName(e) {
        if(firstNamesort==""||firstNamesort=="по убыванию"){
          let sorted=[].concat(props.data)
          sorted.sort(function(a, b) {
            if (a.firstName < b.firstName) 
            return -1
          if (a.firstName >b.firstName)
            return 1
          return 0 
           });
         setdata(sorted)
         setfirstNamesort("по возрастанию")
        }else{
          let sorted=[].concat(props.data)
          sorted.sort(function(a, b) {
            if (b.firstName < a.firstName) 
            return -1
          if (b.firstName >a.firstName)
            return 1
          return 0 
           });
         setdata(sorted)
         setfirstNamesort("по убыванию")
        }
        }

        function sortemail(e) {
          if(emailsort==""||emailsort=="по убыванию"){
            let sorted=[].concat(props.data)
            sorted.sort(function(a, b) {
              if (a.email < b.email) 
              return -1
            if (a.email >b.email)
              return 1
            return 0 
             });
           setdata(sorted)
           setemailsort("по возрастанию")
          }else{
            let sorted=[].concat(props.data)
            sorted.sort(function(a, b) {
              if (b.email < a.email) 
              return -1
            if (b.email >a.email)
              return 1
            return 0 
             });
           setdata(sorted)
           setemailsort("по убыванию")
          }
          }    

          function sortlastName(e) {
            if(lastNamesort==""||lastNamesort=="по убыванию"){
              let sorted=[].concat(props.data)
              sorted.sort(function(a, b) {
                if (a.lastName < b.lastName) 
                return -1
              if (a.lastName >b.lastName)
                return 1
              return 0 
               });
             setdata(sorted)
             setlastNamesort("по возрастанию")
            }else{
              let sorted=[].concat(props.data)
              sorted.sort(function(a, b) {
                if (b.lastName < a.lastName) 
                return -1
              if (b.lastName >a.lastName)
                return 1
              return 0 
               });
             setdata(sorted)
             setlastNamesort("по убыванию")
            }
            }      
            function sortPhone(e) {
              if(phonesort==""||phonesort=="по убыванию"){
                let sorted=[].concat(props.data)
                sorted.sort(function(a, b) {
                  return parseInt(a.phone.match(/\d+/)) - parseInt( b.phone.match(/\d+/));
                  });
                setdata(sorted)
                setphonesort("по возрастанию")
                }else{
                  let sorted=[].concat(props.data)
                  sorted.sort(function(a, b) {
                    return parseInt(b.phone.match(/\d+/)) - parseInt( a.phone.match(/\d+/));
                    });
                setdata(sorted)
                setphonesort("по убыванию")
                }
              }
    function filtrData(value) {
      setdata(value)
      
    }       




    return (
        <>
        <Find filtrData={filtrData} data={props.data}/>
        <Add getItem={props.getItem} />
    <table className="main-table">
        <thead>
        <tr >
        <td onClick={sortId}>id {idsort}</td>
        <td onClick={sortfirstName}>firstName {firstNamesort}</td>
        <td onClick={sortlastName}>lastName {lastNamesort}</td>
        <td onClick={sortemail}>email {emailsort}</td>
        <td onClick={sortPhone}>phone {phonesort}</td>
        </tr>
        </thead>
        <tbody onClick={showData}>{tableItems}</tbody>
    </table>
    <MoreInfo info={item}/>
    </>
      )
    }


  export default  Table