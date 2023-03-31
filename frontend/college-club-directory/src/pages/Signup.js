import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  // const navigate = useNavigate();
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleRollno = (event) => {
    setRollno(event.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3101/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        roll: rollno,
        clubId: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          alert(data.message);
          window.location.href = "/login";
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log(err));
    console.log(response);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div class="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-20 h-20 text-violet-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-center">Sign Up</h3>
          <form action="">
            <div class="mt-4">
              <div>
                <label class="block" for="Name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-violet-600"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div class="mt-4">
                <label class="block" for="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-violet-600"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div class="mt-4">
                <label class="block" for="rollno">
                  Roll No
                </label>
                <input
                  type="text"
                  placeholder="Roll No"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-violet-600"
                  value={rollno}
                  onChange={handleRollno}
                />
              </div>
              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-violet-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-violet-600"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <span class="text-xs text-red-400">Password must be same!</span>
              <div class="flex">
                <button
                  type="submit"
                  onClick={handleClick}
                  class="w-full px-6 py-2 mt-4 text-white bg-violet-600 rounded-lg hover:bg-violet-900"
                >
                  Create Account
                </button>
              </div>
              <div class="mt-6 text-grey-dark">
                Already have an account?
                <a class="text-violet-600 hover:underline pl-1" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
