import clsx from 'clsx'
import { Link } from 'react-router-dom'

import React, { ReactNode, memo } from 'react'

import './index.scss'

interface IMenu {
  tags: string[]
  activeTag: string
}

interface IButton {
  link: string
  isActive: boolean
  children?: ReactNode
}

const Button = ({ link, children, isActive }: IButton) => {
  return (
    <Link to={`?tag=${link}`} className={clsx('button', isActive && 'button--active')}>
      {children}
    </Link>
  )
}

const Menu = ({ tags, activeTag }: IMenu) => {
  return (
    <section className="menu">
      <Button link="Все темы" isActive={activeTag === 'Все темы'}>
        Все темы
      </Button>
      {tags.map((tag) => {
        return (
          <Button link={tag} isActive={tag === activeTag}>
            {tag}
          </Button>
        )
      })}
    </section>
  )
}

export default memo(Menu)
