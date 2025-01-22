'use client'

import React, { useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { setDifficulty, setSearch } from '../redux/questionsSlice'
import gsap from 'gsap'

export default function Component({ children }) {
  const location = useLocation()
  const dispatch = useDispatch()
  const sidebarRef = useRef(null)
  const contentRef = useRef(null)

  const changeHandler = (e) => {
    dispatch(setSearch(e.target.value))
  }

  const changeDiffHandler = (e) => {
    dispatch(setDifficulty(e.target.value))
  }

  const questionMenu = [
    {
      name: 'Hooks',
      path: '/challenges/hooks',
    },
    {
      name: 'Router',
      path: '/challenges/router',
    },
    {
      name: 'Custom Hooks',
      path: '/challenges/custom-hooks',
    },
    {
      name: 'Context Api',
      path: '/challenges/context-api',
    },
    {
      name: 'Debugging',
      path: '/challenges/debugging',
    },
    {
      name: 'Portals',
      path: '/challenges/portals',
    },
  ]

  useEffect(() => {
    // Animate sidebar menu items
    gsap.from(sidebarRef.current?.children, {
      opacity: 0,
      x: -50,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out',
    })

    // Animate main content area
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power3.out',
    })
  }, [])

  return (
    <div className="flex h-[calc(100vh-7rem)] max-lg:h-[calc(100vh-9rem)] max-lg:flex-col backgound-color">
      <div className="flex lg:w-[15%] lg:justify-center max-lg:w-[100%] max-lg:hidden">
        <div ref={sidebarRef} className="flex lg:flex-col lg:justify-evenly">
          {questionMenu.map((menu, i) => {
            const isActive = location.pathname === menu.path
            return (
              <div
                key={i}
                className={`flex justify-center items-center text-white ${
                  isActive ? 'button-background' : ''
                }`}
              >
                <Link
                  className="p-3 rounder-lg border-transparent background-hover flex items-center justify-center h-[100%] w-[100%]"
                  to={menu.path}
                >
                  {menu.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="border border-white mx-1 max-lg:hidden" />
      <div ref={contentRef} className="lg:w-[85%] max-lg:mt-3 max-lg:mx-2 max-lg:h-full">
        <header className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search challenges..."
                className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                onChange={changeHandler}
              />
              <AiOutlineSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              className="rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              onChange={changeDiffHandler}
            >
              <option disabled selected>
                Difficulty
              </option>
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>
        </header>
        <div className="mt-5 mb-5 lg:h-[80%] max-lg:mt-4 max-lg:ml-2 max-lg:h-[calc(100vh-18rem)]">
          {children}
        </div>
      </div>
    </div>
  )
}