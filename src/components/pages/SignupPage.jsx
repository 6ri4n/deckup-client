import { useRef } from "react";
function SignupPage() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const payload = JSON.stringify({
      username,
      password,
    });
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  // handle login endpoint request here
  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="flex flex-col rounded-3xl p-12 m-6 border">
        <div className="text-xl tracking-wide mb-10">Sign In</div>
        <div className="mt-5 mx-5">
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
            <div className="text-sm my-12 font-semibold text-gray-700 hover:text-black underline">
              <a href="/#">Forgot password?</a>
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="remember_me"
                className="block text-sm text-gray-900"
              >
                Remember me
              </label>
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>
            <div className="my-12 flex justify-center">
              <button
                type="submit"
                className="w-11/12 bg-blue-800 rounded-full p-1.5 text-white hover:bg-blue-900"
              >
                Sign in
              </button>
            </div>
            <div className="flex text-center text-sm text-gray-500">
              <p>Don't have an account yet?</p>
              <a
                href="/#"
                className="ml-1 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Create Account
              </a>
              .
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignupPage;
