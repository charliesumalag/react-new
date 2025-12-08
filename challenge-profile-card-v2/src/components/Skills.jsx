import React from 'react'

const Skills = ({skill, color, level}) => {

  return (
    <div className="px-1 py-1 rounded-sm font-medium" style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && "👶"}
        {level === 'intermediate' && "👍"}
        {level === 'advanced' && "💪"}
      </span>
    </div>
  )
}

export default Skills
