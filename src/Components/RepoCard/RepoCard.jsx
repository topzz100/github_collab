import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Wrapper } from './RepoCard.styles'

const RepoCard = ({repo}) => {
  return (
    <Wrapper>
      
      <Link to={`/repos/${repo.name}`}>
        <Image src={repo.owner.avatar_url}/>
        <h4>{repo.name}</h4>
      </Link>
  
    </Wrapper>
  )
}

export default RepoCard