import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './NavBar.styles'

const NavBar = () => {

  return (
    <Wrapper>
      <Link to={'/'}>
        <h3>ANGULAR</h3>
      </Link>
      <div>
        <Link to={'/'}>
          <h4>contributors</h4>
        </Link>
        <Link to={'/repos'}>
          <h4>repos</h4>
        </Link>
      </div>

    </Wrapper>
  )
}

export default NavBar