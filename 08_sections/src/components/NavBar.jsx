

import React from 'react'
import { useAppStore } from '../store/appStore'

function NavBar() {

    const user=useAppStore((state)=>state.user)
    const theme=useAppStore((state)=>state.theme)
    const toggleTheme=useAppStore((state)=>state.toggleTheme)
  return (
    <div>
        <h2>Theme:{theme}</h2>
        <button onClick={toggleTheme}>
            Change Theme  
        </button>
    </div>
  )
}

export default NavBar