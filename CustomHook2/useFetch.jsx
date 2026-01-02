import {useState,useEffect} from 'react';
function useFetch(url){
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setData(data);
      setLoading(false);
    })
    .catch((err)=>{
      setError(err.message);
      setLoading(false);
    })
  },[url]);
  return {data, loading, error};
}
export default useFetch;