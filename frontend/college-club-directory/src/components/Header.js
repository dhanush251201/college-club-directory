import React, { useEffect } from "react";

// import link
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  // isLoggedIn
  // const authCond = localStorage.getItem("isLoggedIn");
  // const [authCond, setAuthCond] = useState(false);

  useEffect(() => {
    // const tmp = localStorage.getItem("isLoggedIn");
    console.log("hit");
    // setAuthCond(tmp);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}

        <Link to="/">
          <img src={Logo} className="w-24" alt="" />
        </Link>
        {localStorage.getItem("isLoggedIn") ? (
          <div>
            <Link
              className="hover:text-violet-900 transition"
              to="/login"
              onClick={handleLogout}
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-6">
              <Link className="hover:text-violet-900 transition" to="/login">
                Log in
              </Link>
              <Link
                className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
        {/* Buttons */}
      </div>
    </header>
  );
};

export default Header;
