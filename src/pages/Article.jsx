import useFetch from "../hooks/useFetch";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = `/articles/${id}`;
  const [
    {
      response: fetchArticleResponse,
      error: fetchArticleError,
      isLoading: fetchArticleIsLoading,
    },
    doFetch,
  ] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div>
      {!fetchArticleIsLoading && fetchArticleResponse && (
        <h1>{fetchArticleResponse.article.title}</h1>
      )}{" "}
    </div>
  );
};

export default Article;
