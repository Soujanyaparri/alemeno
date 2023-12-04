import React from 'react'
import './App.css'

function Sidebar() {
  return (
    <div className='sidebar'>Sidebar
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='bar'>
    <a href='/Coursedetails'>
    <div> Coursedetails</div></a>
    <br/>
    <br/>
    <br/>
    <a href='/Courselist'>
    <div>CourseList</div> </a>
    <br/>
    <br/>
    <br/>
    <div>Feedback</div>
    <br/>
    <br/>
    <br/>
    <div>StudentDetails</div>
    <br/>
    <br/>
    <br/>
    <div>LogOut</div>
    </div>
    </div>
  )
}

export default Sidebar