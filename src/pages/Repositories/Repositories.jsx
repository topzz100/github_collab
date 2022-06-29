import React, { useEffect, useState } from 'react'
import RepoCard from '../RepoCard/RepoCard'
import { Content, Top, Wrapper } from './Repositories.style'
import axios from 'axios'
const access_token = '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'
const Repositories = () => {
  const [repos, setRepos] = useState([])

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