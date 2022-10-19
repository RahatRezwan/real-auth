import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
               <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Hello there</h1>
                  <p className="py-6">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                     exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <Link to="/profile">
                     <button className="btn btn-primary mr-3">Profile</button>
                  </Link>
                  <Link to="/login">
                     <button className="btn btn-primary mr-3">Login</button>
                  </Link>
                  <Link to="/register">
                     <button className="btn btn-primary">Register</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
