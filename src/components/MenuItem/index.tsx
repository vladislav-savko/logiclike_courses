import clsx from 'clsx'
import { Link } from 'react-router-dom'

import React, { ReactNode, memo } from 'react'

import './index.scss'

export interface IMenuItem {
  link: string
  isActive: boolean
  children?: ReactNode
}

const MenuItem = ({ link, children, isActive }: IMenuItem) => {
  return (
    <Link to={`?tag=${link}`} className={clsx('menu-item', isActive && 'menu-item--active')}>
      {children}
    </Link>
  )
}

export default memo(MenuItem)
