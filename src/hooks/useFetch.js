import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';
import { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const BASE_URL = 'https://628a38525da6ddfd5d61021f.mockapi.io/';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : '',
        },
      },
    };

    if (!isLoading) {
      return;
    }

    axios(BASE_URL + url, requestOptions)
      .then((res) => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data);
          setIsLoading(false);
        }
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, error }, doFetch];
};

export default useFetch