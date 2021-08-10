import React from "react";
// import { useState, useEffect, useRef } from "react";
import { useRegform } from "../utils/Useform";

export default function Register() {
  const { values, setValues, errors, SetErrors, handleSubmit, handleChange } =
    useRegform();

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <a href="">
            <b>Codevweb</b>
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new Admin</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  name="repassword"
                  value={values.repassword}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>

                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>

            <div className="text-center mt-3">
              <a href="/login" className="text-center">
                I already have a membership
              </a>
            </div>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
      {/* /.register-box */}
    </div>
  );
}
