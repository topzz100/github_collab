import React, { useEffect, useState } from 'react'
import RepoCard from '../../Components/RepoCard/RepoCard'
import { Content, Top, Wrapper } from './Repositories.style'
import { fetchHandler } from '../../data'
import NavBar from '../../Components/NavBar/NavBar'
const Repositories = () => {
  const [repos, setRepos] = useState([])
  
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
       <h2>Repositories</h2>
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