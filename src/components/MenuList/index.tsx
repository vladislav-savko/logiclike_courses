import MenuItem from 'components/MenuItem'

import React, { memo } from 'react'

import './index.scss'

interface IMenuList {
  tags: string[]
  activeTag: string
}

const MenuList = ({ tags, activeTag }: IMenuList) => {
  return (
    <section className="menu-list">
      <MenuItem link="Все темы" isActive={activeTag === 'Все темы'}>
        Все темы
      </MenuItem>
      {tags.map((tag) => {
        return (
          <MenuItem link={tag} isActive={tag === activeTag}>
            {tag}
          </MenuItem>
        )
      })}
    </section>
  )
}

export default memo(MenuList)
