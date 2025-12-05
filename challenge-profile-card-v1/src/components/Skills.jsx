import React from 'react'

const Skills = (props) => {
  return (
    <p className={`px-1 py-1 rounded-sm font-medium ${props.bgColor}`}>
        {props.skill}
    </p>
  )
}

export default Skills
