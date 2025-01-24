import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth/cordova";
import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "/firebase.config.js";

const Register = () => {
  const [registerError, setregisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassowrd, setShowpassword] = useState(false);
  const handalSubmitFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);
    //reset error
    setregisterError("");
    setSuccess("");

    // password warning
    if (password.length < 6) {
      setregisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setregisterError("Password must have a Upar case word");
      return;
    } else if (!accepted) {
      setregisterError("Place Accept our terms and conditions");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("user created successfully");
        console.log(result);
        sendEmailVerification(result.user).then(() => {
          alert("Check your Email");
        });
      })
      .catch((error) => {
        setregisterError("User is already registered .Place Log in now.");
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handalSubmitFrom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
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
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassowrd ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                <span
                  className="text-3xl absolute top-11 right-4"
                  onClick={() => setShowpassword(!showPassowrd)}
                >
                  {showPassowrd ? (
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div>
                  <input type="checkbox" name="terms" id="terms" />
                  <label className="p-1" htmlFor="terms">
                    Accept Our terms and Condition
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
              {registerError && <p className="text-red-600">{registerError}</p>}

              <div>
                <p className="text-green-500">{success}</p>
              </div>
              <p>
                If You Already Register user
                <Link className="underline mx-1  text-blue-700" to="/hero">
                  Place Login Now
                </Link>
              </p>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
