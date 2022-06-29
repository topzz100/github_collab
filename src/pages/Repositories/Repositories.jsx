import React, { useEffect, useState } from 'react'
import RepoCard from '../RepoCard/RepoCard'
import { Content, Top, Wrapper } from './Repositories.style'
import axios from 'axios'
const Repositories = () => {
  const [repos, setRepos] = useState([])
  const access_token = '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'
  
  useEffect(() => {
    const handleFetch = async()=> {
    try{

       const res = await axios.get('https://api.github.com/users/angular/repos', {
         headers: {
           'Authorization': `token ${access_token}`
        }
       })
        res.data && setRepos(res.data)
     }catch(err){
       console.log(err)
     }
   }
   handleFetch()
  }, [])
  return (
    <Wrapper>
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