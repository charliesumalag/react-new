import React from 'react'
import Avatar from './components/Avatar'
import Intro from './components/Intro'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='border-3 border-black w-[600px] m-5'>
      <Avatar />
      <div className='p-8 flex flex-col gap-2'>
        <h1 className='font-bold text-2xl'>Charlie Sumalag</h1>
        <Intro />
        <div className='flex gap-2 mt-2 flex-wrap'>
          <Skills bgColor='bg-blue-700' skill='HTML + CSS'/>
          <Skills bgColor='bg-yellow-400' skill='Javascript'/>
          <Skills bgColor='bg-green-700' skill='Web Design'/>
          <Skills bgColor='bg-orange-400' skill='Git and GitHub'/>
          <Skills bgColor='bg-violet-700' skill='React'/>
          <Skills bgColor='bg-red-400' skill='Laravel'/>
        </div>
      </div>
    </div>
  )
}

export default App
