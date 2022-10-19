import React, { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {
   const { createNewUser } = useContext(AuthContext);
   /* Handle form submit */
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      /* get form value */
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const rePassword = form.re_password.value;
      console.log(name, email, password, rePassword);

      /* create user */
      createNewUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log("register:", user);
         })
         .catch((error) => console.log(error));
   };
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col w-11/12 md:w-3/5 lg:max-w-lg">
            <div className="card w-full shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="text-center">
                     <h1 className="text-3xl font-bold">SIGN UP</h1>
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Full Name</span>
                     </label>
                     <input
                        type="text"
                        name="name"
                        placeholder="full name"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Re-type Password</span>
                     </label>
                     <input
                        type="password"
                        name="re_password"
                        placeholder="re-type password"
                        className="input input-bordered focus:border-none focus:outline-primary"
                     />
                  </div>
                  <div className="form-control mt-5">
                     <button className="btn btn-outline hover:btn-primary">Sign Up</button>
                  </div>

                  <p className="text-center my-2">
                     Already have an account?{" "}
                     <Link to="/login" className="link link-hover text-end text-base text-primary">
                        Login
                     </Link>
                  </p>

                  <div className="divider">OR</div>
                  <div className="text-center">
                     <h4>Sign Up With</h4>
                  </div>
                  <div className="form-control mt-2 flex flex-row gap-3 w-full justify-evenly">
                     <button className="btn btn-outline hover:btn-primary w-1/4">
                        <FaGoogle className="w-5 h-5" />
                     </button>
                     <button className="btn btn-outline hover:btn-primary w-1/4">
                        <FaGithub className="w-5 h-5" />
                     </button>
                     <button className="btn btn-outline hover:btn-primary w-1/4">
                        <FaTwitter className="w-5 h-5" />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
