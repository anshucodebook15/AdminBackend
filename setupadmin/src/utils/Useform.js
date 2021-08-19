import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import cookie from 'react-cookies'
import axios from "axios";
import { login, register } from "../Apis/authApi";

import { useAuthcontext } from "../Contexts/authContext";

// Axios
axios.defaults.withCredentials = true;


export const useRegform = () => {
  // Use contex

  // Form State
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  // Errors
  const [errors, SetErrors] = useState({});

  // HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation Fields
    if (values.password !== values.repassword) {
      console.log("Incorrect Password Match");
    } else {
      const formData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      // Register Data
      const regData = await register(formData);

      console.log(regData);

      // Store cookies
      // setLogstate();
    }
  };

  return {
    values,
    setValues,
    errors,
    SetErrors,
    handleChange,
    handleSubmit,
  };
};

export const useLogform = () => {
  // Hooks
  const history = useHistory();

  // Use context

  // Form State
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Errors
  const [errors, SetErrors] = useState({});

  // HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logdata
    const logdata = {
      email: values.email,
      password: values.password,
    };

    // Login Data
    const loginData = await login(logdata);

    // You may Loss data 
    // localStorage.setItem('cwlogin', true);

    // Redirect To Dashboard
    history.push("/dashboard");

    console.log(loginData);
  };

  return {
    values,
    setValues,
    errors,
    SetErrors,
    handleChange,
    handleSubmit,
  };
};

export const useLogout = () => {
  const history = useHistory();

  const handleLogout = () => {

  // Delete Cookie and Just Logout
    cookie.remove('name', { path: '/' })

  //  Redirect To login page
    history.push('/');

  }

  return {
   handleLogout
  };

}
