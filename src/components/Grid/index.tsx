import React, { ReactNode, memo } from 'react'

import './index.scss'

export interface IGrid {
  children?: ReactNode[]
}

const Grid = ({ children }: IGrid) => {
  return <section className="grid">{children}</section>
}

export default memo(Grid)
