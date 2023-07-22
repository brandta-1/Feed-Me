import './App.css';
import React, { useState, useEffect } from 'react';
import params from './params';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import SearchForm from './components/SearchForm';

const API_KEY = "7bbbe81cbe8b6c0236aed02fad02e1dc";
const APP_ID = "ebc0f8c5";
const API_URL = "https://api.edamam.com/api/recipes/v2";


function App() {

  const [theSelect, setTheSelect] = useState([]);
 
  console.log(theSelect);

  function addParam(e){
    setTheSelect((currParams) => {
      return [
        ...currParams,
        e
      ]
    })
  }

  return (
    <>
      <Header />


      <SearchBox addParam={addParam}/>

      <SearchForm settings={theSelect}/>
    </>
  );
}

export default App;
