import React from 'react'
import BtnTheme from './BtnTheme/BtnTheme'
import HeaderUl from './HeaderUl/HeaderUl'
import HeaderForm from './HeaderForm/HeaderForm'

const HeaderMenu = () => {
  return (
    <>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
        <HeaderUl />

        <BtnTheme />

        <HeaderForm />

    </div>

    </>
  )
}

export default HeaderMenu
