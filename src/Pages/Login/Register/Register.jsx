import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    createUser,
    signInWithGoogle,
    signInWithGitHub,
    auth,
    setLoading,
    logOut,
  } = useContext(AuthContext);

  const [accepted, setAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    console.log(name, email, photo, password, confirm_password);

    if (password !== confirm_password) {
      setError('Your password did not match');
      return;
    } else if (password.length < 6) {
      setError('Password must be 6 characters or longer');
      return;
    }

    createUser(email, password)
      .then((result) => {
        logOut();
        navigate('/login');

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser(result.user);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.code);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        logOut();
        navigate('/login');
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        logOut();
        navigate('/login');
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <h2 className="text-center mb-3">
              Sign Up to access your files, communicate with colleagues and view
              project content.
            </h2>
            <div className="flex items-center justify-center mb-3">
              <button
                onClick={handleGitHubSignIn}
                type="button"
                className="bg-gray-100 py-2 px-10 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                  fillRule="evenodd"
                  className=""
                >
                  <path
                    fillRule="evenodd"
                    d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                  />
                </svg>
              </button>
              <button
                onClick={handleGoogleSignIn}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className=" py-2 px-10 ml-5 rounded-md bg-gray-100 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 25"
                  width="32px"
                  height="32px"
                >
                  {' '}
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </button>
            </div>
            <h3 className="text-center mb-4">Or</h3>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photo"
                placeholder="Photo URL"
                required
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  required
                />
                {showPassword ? (
                  <FaEye
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="relative w-full">
                <input
                  type={showConfirmPass ? 'text' : 'password'}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required
                />
                {showConfirmPass ? (
                  <FaEye
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
              <p className="text-red-600 mb-3">{error}</p>
              <div className="flex items-center py-2 ">
                <input
                  onClick={handleAccepted}
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Accept Terms and Condition
                </label>
              </div>
              <button
                type="submit"
                disabled={!accepted}
                className="w-full text-center py-3 rounded bg-green-400 font-serif text-lg text-black hover:bg-green-500 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="#"
              >
                Terms of Service
              </Link>{' '}
              and
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login/"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
