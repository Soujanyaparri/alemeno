import React,{useState}from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import './App.css'

function Dashboard() {
  return (
    <div className='grid-Container' >
    
   <Sidebar/>
    <Home/>
    </div>
  )
}

export default Dashboard