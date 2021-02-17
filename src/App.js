import React, { useEffect, useState } from 'react';
import './App.css';
import Load from './components/Load';
import Table from './components/Table';
import Pagination from "./components/Pagination";



function App() {
  const [data, setdata] = useState(0)
  const [isloaded, setisloaded] = useState(false)
  const [currentData, setcurrentData] = useState(null)
  const [howmanyPages, sethowmanyPages] = useState(0);
  const [buttonID, setbuttonID] = useState(0)
  const [addItem, setAdditem] = useState("");
  const [butdiss, setbutdiss] = useState(false);

  useEffect(() => {
   if(isloaded===true){
     setbutdiss(true)
   }else setbutdiss(false)
  }, [isloaded]);

  function updateData(value, isLoading) {
    if (isLoading == "done") {
      setdata(value)
      setbuttonID(0)
    }
    setisloaded(isLoading)
  }

  useEffect(() => {
    if (data != 0) {
      onPageData(buttonID)
    }
  }, [data, buttonID]);


  function onPageData(buttonID) {
    let maxitems = 30;
    let pageCount = Math.ceil(data.length / maxitems)
    if (pageCount) {
      sethowmanyPages(pageCount)
    }
    let count = buttonID
    let onPagearr = data.slice(buttonID * maxitems, (+buttonID + 1) * maxitems)
    setcurrentData(onPagearr)
  }

  function checkButtons(value) {
    setbuttonID(value)
  }

  function getItem(value) {
    setAdditem(value)
    let arr = data
    arr = [value].concat(arr)
    setdata(arr)
  }


  

  return (
    <div className="app">
      <div>
      <Load butdiss={butdiss} updateData={updateData} name="Скачать большой объем данных" url="http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}" />
      <Load butdiss={butdiss} updateData={updateData} name="Скачать малый объем данных" url="http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D" />
      </div>
      { isloaded === "done" && < Table getItem={getItem} isloaded={isloaded} data={currentData} />}
      {isloaded === true && <p>Загрузка</p>}
      {isloaded === "error" && <p>Ошибка загрузки. Попробуйте еще раз</p>}
      <Pagination isloaded={isloaded} howmanyPages={howmanyPages} checkButtons={checkButtons} />
    </div>


  );
}

export default App;
