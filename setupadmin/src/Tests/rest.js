// Login Form

// // Axios Credentials
// const credentials = {
//   withCredentials: true,
//   headers: {
//     "Access-Control-Allow-Origin": "true",
//     "Content-Type": "application/json",
//   },
// };

// await axios
//         .post(authApi.register, {
//           username: values.username,
//           email: values.email,
//           password: values.password,
//         })
//         .then(function (result) {
//           console.log(result);
//         })
//         .catch((err) => console.log(err));

// Send Data to get Feedback
//  await axios
//  .post(authApi.login, logdata, credentials)
//  .then(function (result) {
//    console.log(result);
//  })
//  .catch((err) => console.log(err));

// <div className="card">
// <div className="card-body register-card-body">
//   <p className="login-box-msg">Register a new Admin</p>

//   <form onSubmit={handleSubmit}>

// <div className="input-group mb-3">
// <input
//   type="text"
//   className={`form-control ${errors.username && "is-invalid"}`}
//   placeholder="Full name"
//   name="username"
//   value={values.username}
//   onChange={handleChange}
// />
// <div className="input-group-append">
//   <div className="input-group-text">
//     <span className="fas fa-user" />
//   </div>
// </div>

// <span class="error invalid-feedback">{errors.username}</span>
// </div>

//     <Textfield
//       type={"text"}
//       error={errors.username}
//       placeholder={"First Name"}
//       name={"username"}
//       icon={"fa-user"}
//       value={values.username}
//       handler={handleChange}
//     />

//     <div className="input-group mb-3">
//       <input
//         type="email"
//         className={`form-control ${errors.email && "is-invalid"}`}
//         placeholder="Email"
//         name="email"
//         value={values.email}
//         onChange={handleChange}
//       />
//       <div className="input-group-append">
//         <div className="input-group-text">
//           <span className="fas fa-envelope" />
//         </div>
//       </div>

//       <span class="error invalid-feedback">{errors.email}</span>
//     </div>

//     <div className="input-group mb-3">
//       <input
//         type="password"
//         className={`form-control ${errors.password && "is-invalid"}`}
//         placeholder="Password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <div className="input-group-append">
//         <div className="input-group-text">
//           <span className="fas fa-lock" />
//         </div>
//       </div>
//       <span class="error invalid-feedback">{errors.password}</span>
//     </div>

//     <div className="input-group mb-3">
//       <input
//         type="password"
//         className={`form-control ${
//           errors.repassword && "is-invalid"
//         }`}
//         placeholder="Retype password"
//         name="repassword"
//         value={values.repassword}
//         onChange={handleChange}
//       />
//       <div className="input-group-append">
//         <div className="input-group-text">
//           <span className="fas fa-lock" />
//         </div>
//       </div>
//       <span class="error invalid-feedback">{errors.repassword}</span>
//     </div>

//     <div className="row">
//       <div className="col-8">
//         <div className="icheck-primary">
//           <input
//             type="checkbox"
//             id="agreeTerms"
//             name="terms"
//             defaultValue="agree"
//           />
//           <label htmlFor="agreeTerms">
//             I agree to the <a href="#">terms</a>
//           </label>
//         </div>
//       </div>

//       {/* /.col */}
//       <div className="col-4">
//         <button type="submit" className="btn btn-primary btn-block">
//           Register
//         </button>
//       </div>
//       {/* /.col */}
//     </div>
//   </form>

//   <div className="text-center mt-3">
//     <a href="/login" className="text-center">
//       I already have a membership
//     </a>
//   </div>
// </div>
// {/* /.form-box */}
// </div>
// {/* /.card */}
