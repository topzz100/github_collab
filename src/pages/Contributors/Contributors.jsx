import React, { useEffect, useState } from 'react'
import axios from "axios"
import ConCard from '../../Components/ConCard/ConCard'
import { fetchHandler} from '../../data'
import { Content, Sort, Top, Wrapper } from './Contributors.styles'
import NavBar from '../../Components/NavBar/NavBar'


const Contributors = () => {
  const [repos, setRepos] = useState([])
  const [contributors, setContributors] = useState([])
  const [sort, setSort] = useState([])
  
  
  const handleFetch = async()=> {
    try{
      const res = await fetchHandler('https://api.github.com/users/angular/repos')
      res && setRepos(res)
      res&& fetchData(res)

     
    }catch(err){
    console.log(err)
    }
  
  }


   useEffect(() => {
      handleFetch()
    }, [])

// get all contributors to angular repo
    const fetchData = async(data) => {
      
      const getContrib =  await Promise.all(data.map(async(rep) => await fetchHandler(rep.contributors_url)))
    
      const level =getContrib.reduce((memo, group) => [...memo, ...group.map(g => g)],[])

      const unique = [
      ...new Map(level.map((item) => [item['login'], item])).values()
      ]
      setContributors(unique)
    }
    const handleSort =(e)=> {
        
        if(sort === 'no of contributions'){
        return  setContributors((prev) => (
          prev.sort((a, b) => b.contributions-a.contributions)
        ))
      }
    }

    console.log(sort)
  return (
    <>
    <Wrapper>
      <NavBar/>
      <Top>
        <Sort>
          <h4>
            Sort:
          </h4>
          <select name="" id="" onChange={(e)=>setSort(e.target.value)} onClick={(e)=> handleSort(e)}>
            <option>sort</option>
            <option >no of contributions</option>
            <option >no of followers</option>
            <option >no of public repos</option>
            <option >no of gists</option>
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