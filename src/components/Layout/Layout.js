import React from 'react'
import style from './Layout.module.css'

const layout = ( props ) => (
  <div>
  <main className={style.Container}>
  { props.children }
  </main>
  </div>
)

export default layout;
