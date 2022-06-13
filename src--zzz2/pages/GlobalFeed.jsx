import useFetch from "../hooks/useFetch";
import React, { Fragment, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Feed from "../components/Feed";

const GlobalFeed = () => {
  const apiUrl = `/articles`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <>
      <div>GlobalFeed</div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {!isLoading && response && (
              <Fragment>
                <Feed articles={response} />
              </Fragment>
            )}
    </>
  );
};

export default GlobalFeed;
