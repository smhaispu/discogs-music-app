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

  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: ''
  })
  const toggleToast = (show, message, type) => {
    setToast({
      ...toast,
      show,
      message,
      type

    })
  }
  window.addEventListener('offline', function (e) {
    toggleToast(true, 'You are offline! But what can stop a true music Lover?', 'warning');
    setTimeout(() => {
      toggleToast(false, '', '');
    }, 3000);
  });
  window.addEventListener('online', function (e) {
    toggleToast(true, 'You are online!', 'success');
    setTimeout(() => {
      toggleToast(false, '', '');
    }, 3000)

  });

  return (
    <Context.Provider value={{ state, dispatch }}>

      <div className="App">
        <Header>Music App</Header>
        <ListOfReleases />
        <Loader />
      </div>
      {toast?.show && <ColorAlerts toast={toast} />}
    </Context.Provider>
  );
}

export default App;
