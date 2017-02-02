/* import libs */
import React from 'react'
import { render } from 'react-dom'
import Header from './component/Header'
/* import styles */
import './index.scss'

const renderMain = render(
    <div>
      <Header/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>,
    document.getElementById("bib-root")
  )

export default renderMain
