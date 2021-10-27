import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export default function Navbar({DarkTheme, setDarkTheme}) {
  return (
    <div className="p-5 border-b dark:border-gray-700 border-gray-200 pb-1 flex flex-wrap sm:justify-between justify-center">
      <div className="flex justify-between items-center w-screen space-x-5">
        <Link to="/">
          <p className="text-2xl rounded-md  bg-blue-500 font-bold text-white py-1 px-2">
            Goggl 🔍
          </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!DarkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg transition duration-200">
          {DarkTheme ? 'Light 💡' : 'Dark 🌕'}
        </button>
      </div>
      <Search />
    </div>
  )
}
