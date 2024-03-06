import { useEffect, useState } from 'react';
import axios from 'axios' ;


const useFetch = (endpoint, query) => {
  const [data, setData] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '2b626fbde4msh82811790ed9689bp1329d4jsn640966f1b6c1',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }

  };

  const fetchData = async () => {
    setIsLoading(true);

    try{
      const response = await axios.request (options);
      setData(response.data.data);
      setIsLoading(false);
      console.log(response.data)

    } catch (error) {
      setError(error);
      alert('There is an error')

    } finally {
      setIsLoading(false);

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch};

}

export default useFetch;