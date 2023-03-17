import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="text-white absolute z-50">
        <div>
            <Link to={"/"} className="text-red-600 text-4xl font-black cursor-pointer m-2">NETFLIX</Link>
        </div>
    </div>
  )
}

export default NavBar