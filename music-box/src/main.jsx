import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import './firebase.js'
import "@madzadev/audio-player/dist/index.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
