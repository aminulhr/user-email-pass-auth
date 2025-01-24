import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth"; //
import { useRef, useState } from "react";
import auth from "/firebase.config.js";
const Responsive = () => {
  const [singInError, setsingInError] = useState("");
  const [sucesss, setSucess] = useState("");
  const emailRef = useRef(null);

  const handalSubmitFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setsingInError("");
    setSucess("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSucess("User login sucessfuly");
        console.log(result);
      })
      .catch((error) => {
        setsingInError("Wrong id or password");
        console.log(error);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Cheka your email");
      })
      .catch();
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handalSubmitFrom}
          className="flex flex-col bg-gray-800 w-96 border border-yellow-600  rounded-md shadow-xl justify-center mx-auto mb-4 flex-wrap"
        >
          <input
            className="bg-white p-4 m-4 rounded-md flex-grow-1 flex-shrink-0 basis-3  "
            type="email"
            ref={emailRef}
            name="email"
            placeholder="user name or email  "
          />
          <input
            className="bg-white p-4 m-4 rounded-md flex-grow-1 flex-shrink-0 basis-3"
            type="password"
            name="password"
            placeholder="password"
          />
          <label className="label ml-3">
            <a
              onClick={handleResetPassword}
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
          </label>
          <input
            className="bg-red-500 p-4 m-4 rounded-md flex-grow-1 flex-shrink-0 basis-3"
            type="range"
          />
          <input
            className="bg-red-500 rounded-md flex-grow-1 flex-shrink-0 basis-3"
            type="radio"
          />
          <input
            className="bg-red-500 p-4 m-4 rounded-md flex-grow-1 flex-shrink-0 basis-3"
            type="file"
          />

          <button className="bg-blue-700 p-2 m-4 mb-2 rounded-md my-auto flex-grow-1 flex-shrink-0 basis-20 text-xl text-white font-bold">
            Login
          </button>
          <p className="text-red-600 mx-auto">{singInError}</p>
          <p className="text-blue-600 mx-auto">{sucesss}</p>
        </form>
      </div>
    </div>
  );
};

export default Responsive;
