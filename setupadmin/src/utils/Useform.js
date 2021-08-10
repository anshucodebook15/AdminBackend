import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { authApi } from "../Apis/authApi";

export const useRegform = () => {
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
      await axios
        .post(authApi.register, {
          username: values.username,
          email: values.email,
          password: values.password,
        })
        .then(function (result) {
          console.log(result);
        })
        .catch((err) => console.log(err));
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
    await axios
      .post(authApi.login, {
        email: values.email,
        password: values.password,
      })
      .then(function (result) {
        console.log(result);
      })
      .catch((err) => console.log(err));
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
