import React from 'react'
import './App.css'
function Home() {
  return (
    <main className='main-title'>
      <div className='main-container'>
       <h3>Dashboard</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
        <div className='card-inner'>
          <h3>React Native</h3>
        </div>
        <h1 className='bellow'>200</h1>
      </div>
      </div>

      <div className='main-cards'>
        <div className='card'>
        <div className='card-inner'>
          <h3>instructor name</h3>
        </div>
        </div>
      </div>
      <div className='main-cards'>
        <div className='card'>
        <div className='card-inner'>
          <h3>Gifts</h3>
        </div>
        <h1>12</h1>
        </div>
      </div>
    </main>
  )

  
}

export default Home