import { Link, NavLink } from "react-router-dom"
import { AcademicCapIcon, SearchIcon } from "@heroicons/react/solid"

import { useAppDispatch, useAppSelector } from "redux/hooks"
import { searchInputChange } from "redux/searchInputSlice"

const Navbar = () => {
  const { searchInput: searchInputValue } = useAppSelector(
    ({ searchInput }) => searchInput
  )
  const dispatch = useAppDispatch()

  return (
    <div className="absolute top-0 z-50 flex items-center justify-between w-screen gap-10 p-8 text-xl font-black bg-white border-b-2 bg-opacity-80">
      {/* Logo */}

      <Link to="/">
        <div className="flex items-center gap-1 space-x-2 text-slate-700">
          <AcademicCapIcon className="w-8 text-emerald-500" />
          <p className="hidden text-lg xs+:text-xl xs:block">HackerAPI</p>
        </div>
      </Link>

      {/* SeachBar */}
      <div className="relative flex items-center w-7/12 c-md+:w-1/3 bg-gray-100 rounded-full ">
        <input
          className="w-full px-8 py-3 text-xs xs+:text-sm bg-gray-100 rounded-full outline-none"
          type="text"
          placeholder="Search Hacker News API"
          value={searchInputValue}
          onChange={(e) => {
            dispatch(searchInputChange(e.target.value))
          }}
        />
        <button className="absolute flex right-8" type="button">
          <SearchIcon className="w-4 xs+:w-5 text-gray-500" />
        </button>
      </div>

      {/* Navigation */}
      <div className="hidden gap-10 c-md+:flex text-slate-700">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  )
}

export default Navbar
