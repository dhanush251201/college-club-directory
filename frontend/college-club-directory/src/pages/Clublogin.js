import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3101/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem("isLoggedIn", true);
          console.log("logged In");
          navigate("/clubupload");
        } else {
          console.log("Failed");
        }
        console.log(response);
      })
      .catch((err) => console.log(err));
    // const data = await response.json();
    // if (data.status === 200) {
    //   localStorage.setItem("isLoggedIn", true);
    //   console.log("LoggedIn");
    // } else {
    //   console.log("Error Logging In");
    // }
  };
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={Logo} alt="CD Logo" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your Club Account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a
                href="/login"
                class="font-medium text-indigo-600 hover:text-indigo-500 pl-1"
              >
                Sign in as Student
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleEmail}
                  value={email}
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Club Id"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Password"
                />
              </div>
            </div>
            <div>
              <label className=" text-xs">
                If your club is new, please contact administration to get your
                club credentials
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="https://www.google.com"
                  className="font-medium text-violet-700 hover:text-violet-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <a
                href="/clubupload"
                type="submit"
                onClick={handleClick}
                className="group relative flex w-full justify-center rounded-md bg-violet-700 py-2 px-3 text-sm font-semibold text-white hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 bg-violet-700 group-hover:bg-violet-800"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
