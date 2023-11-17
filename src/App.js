import './App.css';
import React, { useState } from 'react';
import params from './params';
import SearchBox from './components/SearchBox';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
const API_KEY = "7bbbe81cbe8b6c0236aed02fad02e1dc";
const APP_ID = "ebc0f8c5";
const API_URL = "https://api.edamam.com/api/recipes/v2";

const defaultQueryParams = new URLSearchParams({
  type: "public",
  app_id: APP_ID,
  app_key: API_KEY,
}).toString();

Object.values(params).forEach((i) => {
  if (i.type === 'select' || i.type === 'multiple') {

    //this is needed for the Select library to properly function
    i.list.forEach((k, l) => {
      i.list[l] = {
        value: `${k}`,
        label: `${k}`
      }
    });
  }
});

function App() {

  const [theSelect, setTheSelect] = useState([]);
  const [theQuery, setTheQuery] = useState([]);
  const [theHits, setTheHits] = useState(null);

  function testPrint(e) {
    e.preventDefault();

    const query = theQuery.reduce((i, j) => [...i, `${j}`], []).join('&');

    const getURL = `${API_URL}?${defaultQueryParams}&${query.replaceAll(" ", "%20")}`;
    console.log(getURL);
    fetch(getURL)
      .then((res) => res.json())
      .then((res) => {
        setTheHits(res.hits)
      })
  }

  function addParam(e) {

    e = e.map(({ value }) => value)

    theQuery.forEach((_, j) => {
      if (!e.includes(j)) {
        setTheQuery((currQuery) => {
          currQuery[j] = null
          return currQuery
        })
      }
    })

    setTheSelect(() => {
      return e.map((i) => {
        return {
          ...Object.values(params)[i],
          param: Object.keys(params)[i],
          index: i
        }
      })
    })
  }

  function addQuery(e, index, param) {

    if (Array.isArray(e)) {

      const query = e.reduce((i, j) => [...i, `${param}=${j.value}`], []).join('&');
      addQuery(query, index)

    } else if (e.value) {
      const query = `${param}=${e.value}`
      addQuery(query, index)

    } else {
      setTheQuery((currQuery) => {
        currQuery[index] = e
        return currQuery
      })
    }
  }

  return (
    <>
      <body>
        <h1>welcome to feed me</h1>
        <main>
          <SearchBox addParam={addParam} />
          <SearchForm settings={theSelect} addQuery={addQuery} tf={testPrint} />
          <div className="results">
            <Results hits={theHits} />
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
