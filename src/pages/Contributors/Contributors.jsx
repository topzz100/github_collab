import React, { useEffect, useState } from 'react'
import axios from "axios"
import ConCard from '../../Components/ConCard/ConCard'
import { arr1, data } from '../../data'
import { Content, Sort, Top, Wrapper } from './Contributors.styles'


const Contributors = () => {
  const [repos, setRepos] = useState([])
  const [contributors, setContributors] = useState([])
  
  const access_token = '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'
  const handleFetch = async(url)=> {
    try{

      const res = await axios.get('https://api.github.com/users/angular/repos'  ,  {
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      res.data && setRepos(res.data)
      res.data && fetchData(res.data)
    }catch(err){
    console.log(err)
    }
  
  }

   const getData = async(url)=> {
    try{

       const res = await axios.get(url, {
         headers: {
           'Authorization': `token ${access_token}`
        }
       })
       return res.data
     }catch(err){
       console.log(err)
     }
   }

   useEffect(() => {
      handleFetch()
    
    }, [])
    const fetchData = async(data) => {
      
      const getContrib =  await Promise.all(data.map(async(rep) => await getData(rep.contributors_url)))
      // const contrib = await Promise.all(getContrib)
    
    const level =getContrib.reduce((memo, group) => [...memo, ...group.map(g => g)],[])
    // const unique = [...new Set(level)]
    const unique = [
      ...new Map(level.map((item) => [item['login'], item])).values()
    ]
      //console.log(unique)
      setContributors(unique)
    }
   
  
    // useEffect(() => {
    //    fetchData()
    //  }, [])

    //console.log(contributors)
  return (
    <>
    <Wrapper>
      <Top>
        <Sort>
          <h4>
            Sort:
          </h4>
          <select name="" id="">
            <option value="">no of contributions</option>
            <option value="">no of followers</option>
            <option value="">no of public repos</option>
            <option value="">no of gists</option>
          </select>
        </Sort>
      </Top>
      <Content>
        {
          contributors.map((contributor) => (
            <ConCard contributor={contributor} key={contributor.id}/>

          ))
        } 
      
      </Content>
    </Wrapper>
    </>
  )
}

export default Contributors