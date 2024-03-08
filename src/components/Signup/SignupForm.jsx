import { useRef, useState } from "react";
import ValidatePasswords from "../utils/ValidatePasswords";

function SignupForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = () => {
    ValidatePasswords(
      passwordRef,
      confirmPasswordRef,
      passwordError,
      setPasswordError
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    ValidatePasswords();
    if (!passwordError) {
      const payload = JSON.stringify({
        username,
        password,
        confirmPassword,
      });
      // handle login endpoint request here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mt-6">
        <input
          name="username"
          id="username"
          placeholder="Username"
          ref={usernameRef}
          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="NA"
        />
        <label
          htmlFor="username"
          className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Username
        </label>
      </div>
      <div className="relative mt-6">
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
        />
        <label
          htmlFor="password"
          className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Password
        </label>
      </div>
      <div className="relative mt-6">
        <input
          type="password"
          name="password"
          id="confirmPassword"
          ref={confirmPasswordRef}
          onChange={handlePasswordChange}
          placeholder="Confirm Password"
          className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
        />
        <label
          htmlFor="confirmPassword"
          className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Confirm Password
        </label>
      </div>
      {passwordError && (
        <div className="text-red-500 text-sm mt-2">{passwordError}</div>
      )}
      <div className="my-12 flex justify-center">
        <button
          type="submit"
          className="w-11/12 bg-blue-800 rounded-full p-1.5 text-white hover:bg-blue-900"
        >
          Sign Up
        </button>
      </div>
      <div className="flex text-center text-sm text-gray-500">
        <p>Already have an account?</p>
        <a
          href="/#"
          className="ml-1 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
        >
          Login here
        </a>
        .
      </div>
    </form>
  );
}

export default SignupForm;
