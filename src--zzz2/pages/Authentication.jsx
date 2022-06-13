import { CurrentUserContext } from "../context/currentUser";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Authentication = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [, setToken] = useLocalStorage("token");
  const [, dispatch] = useContext(CurrentUserContext);

  let navigate = useNavigate();
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";
  const pageTitle = isLogin ? "Sign In" : "Sign Up";
  const descriptionLink = isLogin ? "/register" : "/login";
  const descriptionText = isLogin ? "Need an account?" : "Have an account?";
  const apiUrl = isLogin ? "profiles" : "/profiles";
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = isLogin ? { login, password } : { login, password, name };

    doFetch({
      method: "post",
      data: { ...user },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.token);
    setIsSubmit(true);
    dispatch({ type: "SET_AUTHORIZED", payload: response.profiles });
    if (isSubmit) {
      navigate("/");
    }
  }, [response, setToken, dispatch, isSubmit]);

  return (
    <>
      <h1 className="text-xs-center">{pageTitle}</h1>
      <p className="text-xs-center">
        <Link to={descriptionLink}>{descriptionText}</Link>
      </p>
      <form onSubmit={handleSubmit}>
        {error && <div>error!</div>}
        <fieldset>
          {!isLogin && (
            <fieldset className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
          )}

          <fieldset className="form-group">
            <input
              type="login"
              className="form-control form-control-lg"
              placeholder="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isLoading}
          >
            {pageTitle}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Authentication;
