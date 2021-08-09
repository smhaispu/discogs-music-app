import React, { useState } from 'react';
import ListOfReleases from './Components/ListOfReleases';
import { Context } from './'
import './App.css';

function App() {
  const [state, dispatch] = useState({
    pagination: {
      items: 50,
      page: 1,
      pages: 5,
      per_page: 25
    }
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Discogs App</h1>
        <ListOfReleases />
      </div>
    </Context.Provider>
  );
}

export default App;
