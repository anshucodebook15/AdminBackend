import React from "react";
// import { useState, useEffect, useRef } from "react";
import { useRegform } from "../utils/Useform";

// Import TextField
import { Textfield } from "../components/Textfield";

export default function Register() {
  const { values, errors, disable, handleSubmit, handleChange } = useRegform();

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <a href="">
            <b>Codevweb</b>
          </a>
        </div>

        {errors.other && (
          <div class="alert alert-danger" role="alert">
            {errors.other}
          </div>
        )}

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new Admin</p>

            <form onSubmit={handleSubmit}>
              <Textfield
                type={"text"}
                error={errors.username}
                placeholder={"First Name"}
                name={"username"}
                icon={"fa-user"}
                value={values.username}
                handler={handleChange}
              />

              <Textfield
                type={"email"}
                error={errors.email}
                placeholder={"Email"}
                name={"email"}
                icon={"fa-envelope"}
                value={values.email}
                handler={handleChange}
              />

              <Textfield
                type={"password"}
                error={errors.password}
                placeholder={"Password"}
                name={"password"}
                icon={"fa-lock"}
                value={values.password}
                handler={handleChange}
              />

              <Textfield
                type={"password"}
                error={errors.repassword}
                placeholder={"Retype Password"}
                name={"repassword"}
                icon={"fa-lock"}
                value={values.repassword}
                handler={handleChange}
              />

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
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={disable}
                  >
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>

            <div className="text-center mt-3">
              <a href="/" className="text-center">
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
