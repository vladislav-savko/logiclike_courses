import React, { memo } from 'react'

import './index.scss'

export interface ICourseBlock {
  name: string
  image: string
  bgColor: string
}

const CourseBlock = ({ name, image, bgColor }: ICourseBlock) => {
  return (
    <section className="course">
      <div className="course-image" style={{ backgroundColor: bgColor }}>
        <img alt={name} src={image} />
      </div>

      <div className="course-name">{name}</div>
    </section>
  )
}

export default memo(CourseBlock)
