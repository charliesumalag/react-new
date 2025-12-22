import React from 'react'

const App = () => {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackiList />
      <Stats />
    </div>
  )
}

export default App


function Logo() {
  return <h1> 🏝 Far Away 💼</h1>
}


function Form() {
  return <div className='add-form'>
      <h3>What do you need for your 😍 trip? </h3>
  </div>
}

function PackiList() {
  return <div className='list'>
    List
  </div>
}

function Stats() {
  return <footer className='stats'>
   <em>💼 You have x items on your list, and you ha💼 ve already packed x (x%)</em>
  </footer>
}
