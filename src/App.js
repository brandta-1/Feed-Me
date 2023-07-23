import './App.css';
import React, { useState, useEffect } from 'react';
import params from './params';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import SearchForm from './components/SearchForm';

const API_KEY = "7bbbe81cbe8b6c0236aed02fad02e1dc";
const APP_ID = "ebc0f8c5";
const API_URL = "https://api.edamam.com/api/recipes/v2";



let test = new Set();
let test2 = new Set();

Object.values(params).forEach((i, j) => {
  test.add(i);

  if (i.type === 'select' || i.type === 'multiple') {

    i.list.forEach((k, l) => {
      i.list[l] = {
        value: `${k}`,
        label: `${k}`
      }
      console.log(i.list[l])
    });

    console.log([...i.list]);

  }
});

function App() {

  console.log(params);


  const [theSelect, setTheSelect] = useState([]);

  function addParam(e) {

    //rework this so the set is literally just the indices
    if (test2.size === test2.add([...test][e]).size) {
      console.log("nothing changed");
      return;
    } else {
      setTheSelect((currSelect) => {
        return [
          ...currSelect,
          Object.values(params)[e]
        ]
      });
    }

  }

  function addQuery(e) {
    console.log(e);
  }

  return (
    <>
      <Header />


      <SearchBox addParam={addParam} />

      <SearchForm settings={theSelect} addQuery={addQuery} />
    </>
  );
}

export default App;
