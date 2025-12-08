import React from 'react'
import Avatar from './components/Avatar'
import Intro from './components/Intro'
import Skills from './components/Skills'


const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

const App = () => {

  return (
    <div className='border-3 border-black w-[600px] m-5'>
      <Avatar />
      <div className='p-8 flex flex-col gap-2'>
        <h1 className='font-bold text-2xl'>Charlie Sumalag</h1>
        <Intro />
        <div className='flex gap-2 mt-2 flex-wrap'>
          {skills.map((skill) => (
             <Skills skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
