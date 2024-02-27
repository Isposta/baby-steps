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
      'X-RapidAPI-Key': 'f203fed1acmshf9c06846e64c52ep178d4djsn32e0d069e0e7',
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