import axios from 'axios'
const access_token = process.env.REACT_APP_ACCESS_TOKEN

 export const fetchHandler = async(url)=> {
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

