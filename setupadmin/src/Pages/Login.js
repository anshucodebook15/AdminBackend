import React from "react";
import { useLogform } from "../utils/Useform";

// TextFields
import { Textfield } from "../components/Textfield";

// Google Button
import { GoogleLogin } from "react-google-login";

export default function Login() {
  const { values, setValues, errors, SetErrors, handleSubmit, handleChange } =
    useLogform();

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Codevweb</b>
          </a>
        </div>

        {errors.other && (
          <div class="alert alert-danger" role="alert">
            {errors.other}
          </div>
        )}

        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Admin Sign In</p>

            <form onSubmit={handleSubmit}>
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

              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>

                {/* /.col */}
              </div>
            </form>

            {/* /.social-auth-links */}

            <div className="text-center mt-3">
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="/register" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      {/* /.login-box */}
    </div>
  );
}

// <div className="row">
//                   <div className="col text-center">
//                     <GoogleLogin
//                       clientId="338949455188-p5ej29s1rkkc1tl5okp49liu6ufivlmc.apps.googleusercontent.com"
//                       render={(renderProps) => {
//                         return (
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block"
//                             onClick={renderProps.onClick}
//                             disabled={renderProps.disabled}
//                           >
//                             SignIn With Google
//                           </button>
//                         );
//                       }}
//                       onSuccess={googleSuccess}
//                       onFailure={googleFailure}
//                       cookiePolicy={"single_host_origin"}
//                     />
//                   </div>
//                 </div>
// <div className="input-group mb-3">
// <input
//   type="email"
//   className="form-control"
//   placeholder="Email"
//   name="email"
//   value={values.email}
//   onChange={handleChange}
// />
// <div className="input-group-append">
//   <div className="input-group-text">
//     <span className="fas fa-envelope" />
//   </div>
// </div>
// </div>
// <div className="input-group mb-3">
// <input
//   type="password"
//   className="form-control"
//   placeholder="Password"
//   name="password"
//   value={values.password}
//   onChange={handleChange}
// />
// <div className="input-group-append">
//   <div className="input-group-text">
//     <span className="fas fa-lock" />
//   </div>
// </div>
// </div>
