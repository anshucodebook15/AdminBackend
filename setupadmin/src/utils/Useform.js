import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import axios from "axios";
import { login, register } from "../Apis/authApi";

import { useAuthcontext } from "../Contexts/authContext";

// Axios
axios.defaults.withCredentials = true;

export const useRegform = () => {
  // Redirect User to Dashboard
  const history = useHistory();

  // Form State
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  // Errors
  const [errors, SetErrors] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    other: "",
  });

  // Set Disable
  const [disable, Setdisable] = useState(false);

  // HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // console.log(values);
  };

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation Fields
    if (values.password !== values.repassword) {
      SetErrors({
        repassword: "Password Does Not Match",
      });

      return;
    } else {
      // Set Form Data
      const formData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      // Check and Set Register Data
      const regData = await register(formData);

      console.log(regData);

      // Error Handling
      if (regData.data.err.error) {
        const errorField = regData.data.err.error;
        if (errorField.username) {
          SetErrors({ username: errorField.username });
        } else if (errorField.email) {
          SetErrors({ email: errorField.email });
        } else if (errorField.password) {
          SetErrors({ password: errorField.password });
        }
      } else if (regData.data.err) {
        const oerror = regData.data.err;
        SetErrors({
          other: oerror,
        });
      } else {
        // Reset Errors
        SetErrors({
          username: "",
          email: "",
          password: "",
          repassword: "",
        });

        // Make Disable True
        Setdisable(true);

        // Redirect To Dashboard
        history.push("/dashboard");
      }
    }
  };

  return {
    values,
    setValues,
    errors,
    SetErrors,
    disable,
    handleChange,
    handleSubmit,
  };
};

export const useLogform = () => {
  // Hooks
  const history = useHistory();

  // Form State
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Errors
  const [errors, SetErrors] = useState({
    email: "",
    password: "",
    other: "",
  });

  // HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If validation Field empty
    if (!values.email || !values.password) {
      SetErrors({
        other: "Please Enter Correct Login Details",
      });

      return;
    }

    // Get the Logdata
    const logdata = {
      email: values.email,
      password: values.password,
    };

    // Login Data
    const loginData = await login(logdata);

    console.log(loginData);

    // Error Handling
    if (loginData.data.error) {
      const err = loginData.data.error;
      if (err.email) {
        SetErrors({
          email: err.email,
        });
      } else if (err.password) {
        SetErrors({
          password: err.password,
        });
      }
    } else if (loginData.data.oerror) {
      SetErrors({
        other: loginData.data.oerror,
      });
    } else {
      // If User Signed In... Then Clear Error
      SetErrors({
        email: "",
        password: "",
        other: "",
      });

      // Redirect To Dashboard
      history.push("/dashboard");
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

export const useLogout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Delete Cookie and Just Logout
    cookie.remove("name", { path: "/" });

    //  Redirect To login page
    history.push("/");
  };

  return {
    handleLogout,
  };
};

// if (regData.data.error) {
//   SetErrors({ password: regData.data.error[0].message });
//   console.log(regData.data.error[0].message);
// }
