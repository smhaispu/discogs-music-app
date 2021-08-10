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

  const addToast = () => {
    setToast({
      ...toast,
      show: true,
      message: 'You are offline! But what can stop a true music Lover?',
      type: 'warning'

    })
  }

  window.addEventListener('offline', function (e) {
    addToast();
    setTimeout(() => {
      setToast({
        ...toast,
        show: false,
        message: '',
        type: ''

      })
    }, 3000)
  });
  window.addEventListener('online', function (e) {
    setToast({
      ...toast,
      show: true,
      message: 'You are online!',
      type: 'success'

    })
    setTimeout(() => {
      setToast({
        ...toast,
        show: false,
        message: '',
        type: ''

      })
    }, 3000)

  });

  return (
    <Context.Provider value={{ state, dispatch }}>

      <div className="App">
        <Header>Nirvana</Header>
        <ListOfReleases />
        <Loader />
      </div>
      {toast?.show && <ColorAlerts toast={toast} />}
    </Context.Provider>
  );
}

export default App;
