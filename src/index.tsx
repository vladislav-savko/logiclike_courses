import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'styles/index.scss'

import React from 'react'

import Routers from './routers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
)
