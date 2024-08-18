import React from 'react'
import ProjectGrid from '../../components/Project/ProjectGrid'

const Project = () => {

  return (
    <div className='bg-black grid 4xl:grid-cols-1 px-16 py-48 overflow-hidden'>
      
      {/* Project Grids */}
      <ProjectGrid/>
      
    </div>
  )
}

export default Project