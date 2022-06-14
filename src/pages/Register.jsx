import { useState } from "react";
import { Navigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { useGlobalContext } from "../context/appContext";
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });
  const { user, register, login, isLoading, showAlert } = useGlobalContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (isMember) {
      login({ email, password });
    } else {
      register({ name, email, password });
    }
  };

  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper className="page full-page">
        <div className="container">
          {showAlert && (
            <div className="alert alert-danger">
              there was an error, please try again
            </div>
          )}
          <form className="form" onSubmit={onSubmit}>
            <img src={logo} alt="jobio" className="logo" />
            <h4>{values.isMember ? "Login" : "Register"}</h4>

            {!values.isMember && (
              <FormRow
                type="name"
                name="name"
                value={values.name}
                handleChange={handleChange}
              />
            )}

            <FormRow
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />

            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              {isLoading ? "Fetching User..." : "Submit"}
            </button>
            <p>
              {values.isMember ? "Not a member yet?" : "Already a member?"}

              <button
                type="button"
                onClick={toggleMember}
                className="member-btn"
              >
                {values.isMember ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: grid;`;

export default Register;
