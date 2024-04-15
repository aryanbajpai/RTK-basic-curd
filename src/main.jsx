import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//1. SET REDUX ENVIRONMENT
import { Provider } from 'react-redux'
//3. for STORE
import { configureStore } from '@reduxjs/toolkit'
//10. imnport UserReducer here
import Userreducer from './Userreducer.jsx'

//4. initialize Store with REDUCER
const store = configureStore({
  //All Reducers here...
  reducer: {
    users: Userreducer  //<- Reducer1 created in Reducer File
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  {/*2. use Provider to access STORE */}
  <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
