import axios from 'axios'
const access_token = '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'

 const handleFetch = async(url)=> {
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

export const data = async() => {
  let contrib = []
    try{

      const res = await axios.get('https://api.github.com/users/angular/repos' ,{
        headers: {
          'Authorization': `token ${access_token}`
        }
      })
      res.data.forEach(async(repo) => (
        (await handleFetch(repo.contributors_url)).forEach(r => contrib.push(r))
        )
        )
        
       // setCollabs((prev) => [...prev, contrib])
        
      }catch(err){

      }
      return contrib
  }
export const arr1 = data().then(res => res)