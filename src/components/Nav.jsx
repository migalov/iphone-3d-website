import React from 'react'
import Logo from '../assets/images/logo.svg'
import data from '../assets/data.json'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Navigation = () => {

  return (
    <nav className='nav-wrapper'>
      <div className="nav-content">
        <div className="list-styled">
          <li>
            <img src={Logo} alt='Apple' />
          </li>
          {data[0].menuItems.map(item => (
            <li key={item.id}>
              <a className='link-styled' href="#">{item.name}</a>
            </li>
          ))}
          <li><img src={Search} alt="Search" /></li>
          <li><img src={Store} alt="Search" /></li>
        </div>
      </div>
    </nav>
  )
}

export default Navigation