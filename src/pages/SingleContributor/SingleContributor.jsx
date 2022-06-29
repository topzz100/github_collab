import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Content, Details, Image, ImageBox, Wrapper } from './SingleContributor.styles'
import axios from 'axios'


const access_token = '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'

const SingleContributor = () => {
  const[user, setUser] = useState(null)
   const[repos, setRepos] = useState([])
   const[show, setShow] = useState(false)
  const {name} = useParams()


  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        
      const res = await axios.get(`https://api.github.com/users/${name}` ,{
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      res.data && setUser(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchUser()
  },[])

  useEffect(()=>{
    const getRepos = async() => {
      try{
         const res = await axios.get(`https://api.github.com/users/${name}` ,{
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      res.data && setUser(res.data)
      }catch(err){

      }
    }
    getRepos()
  },[])
  console.log(user)

  return (
    <Wrapper>
      <Content>
        <ImageBox>
          <Image src={user?.avatar_url} alt=''/> 

        </ImageBox>
        <Details>
           <h4>
            <span>Name:</span>
            <span>{user?.name}</span>
          </h4>
          <h4>
            <span>Username:</span>
            <span>{user?.login}</span>
          </h4>
          <h4>
            <span>followings:</span>
            <span>{user?.following}</span>
          </h4>
          <h4>
            <span>Followers:</span>
            <span>{user?.followers}</span>
          </h4>
          <h4>
            <span>Username:</span>
            <span>Lorem Ipsum</span>
          </h4>
          <h4>
            <span>Contributions:</span>
            <span>Lorem Ipsum</span>
          </h4>
        </Details>
      </Content>
    </Wrapper>
  )
}

export default SingleContributor