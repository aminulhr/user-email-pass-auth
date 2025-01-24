import { signInWithEmailAndPassword } from "firebase/auth"; // Correct import path
import { useState } from "react";
import auth from "/firebase.config.js";

const Register = () => {
  const [logInError, setlogInError] = useState("");
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
    setlogInError("");
    setSuccess("");

    // password warning
    if (password.length < 6) {
      setlogInError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setlogInError("Password must have a Upar case word");
      return;
    } else if (!accepted) {
      setlogInError("Place Accept our terms and conditions");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("user Log in  successfully");
        console.log(result);
      })
      .catch((error) => {
        setlogInError("wrong email and password");
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
                <button className="btn btn-primary">Log In</button>
              </div>
              {logInError && <p className="text-red-600">{logInError}</p>}
              <div>
                <p className="text-green-500">{success}</p>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
