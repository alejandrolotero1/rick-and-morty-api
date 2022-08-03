// // import React, { useCallback } from "react"
// // import { useState } from "react"

import logo from '../../../Images/portalpng.png'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navBar'>
    <div>
        <h1 className='titleNav'>Rick and Morty</h1>
        <img src={logo} alt="not found"/>
    </div>
    <ul className='buttonsNav'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Novedades</a></li>
    </ul>
</nav>
  )
}



