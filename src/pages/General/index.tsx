import { getCourses } from 'api'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

import CourseBlock from 'components/CourseBlock'
import Grid from 'components/Grid'
import Menu from 'components/Menu'

import { ICourse, TCourses } from 'modules/course'

import React, { useEffect, useMemo, useState } from 'react'

const General = () => {
  const [courses, setCourses] = useState<TCourses>()

  useEffect(() => {
    if (courses) return

    getCourses().then((resp) => {
      setCourses(resp)
    })
  })

  const tags = useMemo(() => {
    let tagsSet = courses?.reduce((accumulator: Set<string>, course: ICourse) => {
      course.tags.forEach((tag) => accumulator.add(tag))
      return accumulator
    }, new Set<string>())

    return Array.from(tagsSet || [])
  }, [courses])

  const location = useLocation()

  interface IQuery {
    tag?: string
  }

  const parseQuery: IQuery = queryString.parse(location.search)

  const activeTag = useMemo(() => {
    return parseQuery.tag && tags.includes(parseQuery?.tag?.toString() || '')
      ? parseQuery.tag
      : 'Все темы'
  }, [parseQuery, tags])

  const displayCourses = useMemo(() => {
    if (activeTag === 'Все темы') return courses

    return courses?.filter((tag) => {
      return tag.tags.includes(activeTag)
    })
  }, [activeTag, courses])

  return (
    <article className="general">
      <Menu {...{ activeTag, tags }} />
      <Grid>
        {displayCourses?.map(({ id, name, image, bgColor }) => {
          return <CourseBlock key={id} {...{ name, image, bgColor }} />
        })}
      </Grid>
    </article>
  )
}

export default General
