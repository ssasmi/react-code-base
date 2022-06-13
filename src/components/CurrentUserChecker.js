import { CurrentUserContext } from "../context/currentUser";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch("profiles");
  const [, dispatch] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");
console.log(token);
  useEffect(() => {
    if (!token) {
      dispatch({ type: "SET_UNAUTHORIZED" });
      return;
    }

    doFetch();
    dispatch({ type: "LOADING" });
  }, [token, dispatch, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    dispatch({ type: "SET_AUTHORIZED", payload: response.profiles });
  }, [response, dispatch]);

  return children;
};

export default CurrentUserChecker;
