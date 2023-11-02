import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { breadCrumbs } from './Variables'
type Props = {}

export const BreadCrumbs = (props: Props) => {
  const location = useLocation()

  let currentLink = ''
  const crumbs = location.pathname.split('/').map((el, index) => {
    currentLink = index === 1 ? `${currentLink}${el}` : `${currentLink}/${el}`
    const key = el !== '' ? el : 'home' // Добавляем ключ "home", если путь пустой

    console.log(currentLink)
    return (
      <div key={key}>
        <NavLink to={currentLink} className="text-[1.25rem] text-green-850">
          {currentLink !== '/' && <span className="px-4">/</span>}
          {breadCrumbs[el]}
        </NavLink>
      </div>
    )
  })

  return <div className="flex">{crumbs}</div>
}
