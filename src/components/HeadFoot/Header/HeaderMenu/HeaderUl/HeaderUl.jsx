import React from 'react'
import HeaderLi from './HeaderLi/HeaderLi'

const HeaderUl = () => {
  return (
    <>

<ul className="navbar-nav me-auto mb-2 mb-lg-0">


<HeaderLi />


<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        Số chương
    </a>
    <ul className="dropdown-menu dropdown-menu-custom">
        <li><a className="dropdown-item" href="#">Dưới
                100</a>
        </li>
        <li><a className="dropdown-item" href="#">100
                - 500</a>
        </li>
        <li><a className="dropdown-item" href="#">500
                - 1000</a>
        </li>
        <li><a className="dropdown-item" href="#">Trên
                1000</a>
        </li>
    </ul>
</li>


</ul>

    </>
  )
}

export default HeaderUl
