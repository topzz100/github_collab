import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Wrapper } from './ConCard.styles'

const ConCard = ({contributor}) => {
  //console.log(c)
  return (
    <Wrapper>
      <Link to={`/details/${contributor.login}`}>
        <Image src={contributor.avatar_url}/>
        <h4>{contributor.login}</h4>
      </Link>
    </Wrapper>
    )
}

export default ConCard