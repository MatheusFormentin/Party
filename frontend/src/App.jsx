import { Outlet } from 'react-router-dom'

import './App.css'

// Components
import Navbar from './components/Navbar'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
   <div className="app">
    <ToastContainer/>
    <Navbar />
    <Outlet/>
   </div>
  )
}

export default App
