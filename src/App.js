import React, { useState } from 'react';
import { Context } from './'
import Loader from './Utils/Loader'
import { Header } from './App.style'
import ListOfReleases from './Components/ListOfReleases';
import ColorAlerts from './Utils/Toast';


function App() {

  const [state, dispatch] = useState({
    pagination: {
      items: 50,
      page: 1,
      pages: 5,
      per_page: 25
    },
    searchVal: ''
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header>Nirvana</Header>
        <ListOfReleases />
        <Loader />
      </div>
    </Context.Provider>
  );
}

export default App;
