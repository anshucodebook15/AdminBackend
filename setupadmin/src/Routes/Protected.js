import React, { Component, useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthcontext } from "../Contexts/authContext";
import cookie from "react-cookies";

export const Protected = ({ component: Component, ...rest }) => {
  // Is Login State True Make Let the user get in it depend on state
  // const isSignup = JSON.parse(localStorage.getItem('cwlogin'));
  // const {login} = useAuthcontext();

  const token = cookie.load("autok");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
};
