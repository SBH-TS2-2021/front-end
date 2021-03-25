import React from 'react'
import style from './Layout.module.css'

const Layout = props => (
  <main className={style.Container}>{props.children}</main>
)

export default Layout
