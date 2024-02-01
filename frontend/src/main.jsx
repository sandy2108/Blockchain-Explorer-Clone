import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Navbar from "./components/HomePage/Navbar.jsx";
import Footer from "./components/HomePage/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <Navbar />
      <div className='min-h-screen'>
        <App />
      </div>

      <Footer />
    </Provider>

  </React.StrictMode>,
)
