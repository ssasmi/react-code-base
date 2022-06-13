import { CurrentUserContext } from "../context/currentUser";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch("profiles");
  const [, dispatch] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");
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
    const pay = response.filter((obj) => {
      return obj.token === +token;
    });
    dispatch({ type: "SET_AUTHORIZED", payload: pay[0].name });
  }, [response, dispatch, token]);

  return children;
};

export default CurrentUserChecker;
