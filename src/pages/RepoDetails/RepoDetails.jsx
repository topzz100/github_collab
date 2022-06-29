import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ConImage, Container, Content, ConWrapper, Details, Image, ImageBox, ShowContrib, Wrapper } from './RepoDetails.styles'
import axios from 'axios'

const access_token = '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'

const RepoDetails = () => {
 const [details, setDetails] = useState(null)
  const [contrib, setContrib] = useState(null)
 const [show, setShow] = useState(false)
 const {name} = useParams()

 useEffect(()=> {
    const handleFetch = async(url)=> {
      try{
         const res = await axios.get(`https://api.github.com/repos/angular/${name}` ,{
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      res.data && setDetails(res.data)
      }catch(err){

      }
    }
  handleFetch()
  
 },[name])

 const getContrib =async() => {
   try{
         const res = await axios.get(details.contributors_url ,{
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      res.data && setContrib(res.data)
      }catch(err){

      }
 } 
 useEffect(()=> {
  getContrib()
 },[show])
console.log(contrib)

  return (
    <Wrapper >
      <Content>
        <ImageBox>
          <Image src={details?.owner.avatar_url} alt=''/> 

        </ImageBox>
        <Details>
           <h4>
            <span>Name:</span>
            <span>{details?.name}</span>
          </h4>
          <h4>
            <span>Owner</span>
            <span>{details?.owner.login}</span>
          </h4>
          <h4 className='contributors' onClick={()=> setShow(true)}>
            <span>Contributors</span>
            <span><i className="fa-solid fa-arrow-right"></i></span>
          </h4>
         

       
        </Details>
      </Content>
        {show && 
          <ShowContrib>
            <Container>
              {
                contrib?.map((con)=>(
                <ConWrapper key={con.id} >
                  <i class="fa-solid fa-xmark" onClick={() => setShow(false)}></i>
                  <Link to={`/details/${con?.login}`}>
                    <ConImage src={con?.avatar_url}/>
                    <h4>{con?.login}</h4>
                  </Link>
                </ConWrapper>

                ))
              }
            </Container>
          </ShowContrib>
        }
    </Wrapper>
  )
}

export default RepoDetails