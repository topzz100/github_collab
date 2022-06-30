import React, { useEffect, useState } from 'react'
import RepoCard from '../../Components/RepoCard/RepoCard'
import { Content, Top, Wrapper } from './Repositories.style'
import axios from 'axios'
import { fetchHandler } from '../../data'
import NavBar from '../../Components/NavBar/NavBar'
const Repositories = () => {
  const [repos, setRepos] = useState([])
  const access_token = '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'
  
  useEffect(() => {
    const handleFetch = async()=> {
    try{

       const res = await fetchHandler('https://api.github.com/users/angular/repos')
        res && setRepos(res)
     }catch(err){
       console.log(err)
     }
   }
   handleFetch()
  }, [])
  return (
    <Wrapper>
      <NavBar/>
      <Top>
       
      </Top>
      <Content>
        {
          repos.map((repo) => (
            <RepoCard repo={repo} key={repo.id}/>

          ))
        } 
      
      </Content>
    </Wrapper>
  )
}

export default Repositories