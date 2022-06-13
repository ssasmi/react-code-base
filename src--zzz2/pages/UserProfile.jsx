import useFetch from '../hooks/useFetch';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const UserProfile = () => {
  //const slug = match.params.slug;
  //const isFavorites = location.pathname.includes('favorites');
  const id = useParams();
  const apiUrl = `profiles/${id.slug}`;
  const [{ response }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);
  if (!response) {
    return null;
  }

  return (<div><img src={response.avatar}/></div>
  );
};
