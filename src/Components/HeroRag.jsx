import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Correct import path
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import auth from "/firebase.config.js";

const Register = () => {
  const [logInError, setlogInError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Corrected typo
  const emailRef = useRef(null);

  const handleSubmitForm = (e) => {
    // Corrected typo
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //reset error
    setlogInError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("User logged in successfully");
        console.log(result);
      })
      .catch((error) => {
        setlogInError("Wrong email or password");
        console.log(error);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    // if (!email) {
    //   console.log("Send email reset", emailRef.current.value);
    //   return;
    // }
    sendPasswordResetEmail(auth, email) // Corrected typo
      .then(() => {
        alert("Check your email for reset instructions");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log In Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmitForm} className="card-body">
              {" "}
              {/* Corrected typo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"} // Corrected typo
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="text-3xl absolute top-11 right-4"
                  onClick={() => setShowPassword(!showPassword)} // Corrected typo
                >
                  {showPassword ? (
                    <img
                      className="w-8 h-8"
                      src="monkey 2.svg"
                      alt=""
                      srcSet=""
                    />
                  ) : (
                    <img
                      className="w-8 h-8"
                      src="monkey.svg"
                      alt=""
                      srcSet=""
                    />
                  )}
                </span>
                <label className="label">
                  <a
                    onClick={handleResetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>
              {logInError && <p className="text-red-600">{logInError}</p>}
              <div>
                <p className="text-green-500">{success}</p>
              </div>
              <p>
                If you are new to the site, please
                <Link className="underline mx-1 text-blue-700" to="/reg">
                  register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
