import { Route, Routes } from 'react-router-dom'

import General from 'pages/General'

import React from 'react'

export interface IRoute {
  Component: any
  title: string
  path: string
  url: string
}

const routes: IRoute[] = [
  {
    Component: General,
    title: 'General',
    path: '/',
    url: '/',
  },
]

const Routers = () => {
  return (
    <>
      <Routes>
        {routes.map(({ title, path, Component }) => {
          return <Route key={title + path} path={path} element={<Component />} />
        })}
      </Routes>
    </>
  )
}

export default Routers
