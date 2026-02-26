import React from 'react'
import Counter from './components/Counter'
import CounterValue from './components/CounterValue'
import CounterBtn from './components/CounterBtn'
import NavBar from './components/NavBar'
import Post from './components/Post'

function App() {
  return (
    <div>
      <h1>Zustand</h1>




      <Counter/>

      <div>
        <CounterValue/>
        <CounterBtn/>
      </div>

      <NavBar/>

      <div>
        <Post/>
      </div>
    </div>
  )
}

export default App