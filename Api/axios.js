import axios from axios
import {useState,useEffect} from 'react'


const UseFetch =()=>{
   const [data ,setData]=useState([])
   const [error , setError ]=useState(null)
   const [isLoading ,setIsLoading]=useState()
  


   const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {
      q: 'workout',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '0c84987a30msh7c9a7a8fe6c8129p1a8237jsn44a9369933c5',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
   

   const FetchData= async ()=>{
  setIsLoading(true)

  try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}finally{
    setIsLoading(false)
}
   }
   
   useEffect(() => {
  FetchData()
   }, [])

 
return{data ,isLoading ,error};

}

export default UseFetch;
