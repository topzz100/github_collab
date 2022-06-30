import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Content, Details, Image, ImageBox, RepoImage, RepoWrapper, ShowRepo, Wrapper } from './SingleContributor.styles'
import axios from 'axios'
import { fetchHandler } from '../../data'
import NavBar from '../../Components/NavBar/NavBar'


const access_token = process.env.REACT_APP_ACCESS_TOKEN
const SingleContributor = () => {
  const[user, setUser] = useState(null)
   const[repos, setRepos] = useState([])
   const[show, setShow] = useState(false)
  const {name} = useParams()


  useEffect(()=>{
    const getUser = async() => {
      try{
         const res = await fetchHandler(`https://api.github.com/users/${name}`)
      res && setUser(res)
      }catch(err){

      }
    }
    getUser()
  },[])

   const getRepos =async() => {
    try{
        const res = await fetchHandler(user?.repos_url)
      res && setRepos(res)
    }catch(err){
      console.log(err)
    }
 } 

  useEffect(()=> {
    getRepos()
  },[show])

  return (
    <>
      <NavBar/>
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
            <span>Public repos</span>
            <span>{user?.public_repos}</span>
          </h4>
          <h4>
            <span>Public gists:</span>
            <span>{user?.public_gists}</span>
          </h4>
           <h4 className='repos' onClick={()=> setShow(true)}>
            <span>Repos</span>
            <span><i className="fa-solid fa-arrow-right"></i></span>
          </h4>
        </Details>
      </Content>
      {show && 
          <ShowRepo>
            <Container>
              {
                repos?.map((rep)=>(
                  <RepoWrapper key={rep.id} >
                  <i className="fa-solid fa-xmark" onClick={() => setShow(false)}></i>
                  <Link to={`/repos/${rep?.name}`}>
                    <RepoImage src={rep?.owner.avatar_url}/>
                    <h4>{rep?.name}</h4>
                  </Link>
                </RepoWrapper>

                ))
              }
            </Container>
          </ShowRepo>
        }
    </Wrapper>
    </>
  )
}

export default SingleContributor