import { useState } from "react";
import MobileButton from "../ui/MobileButton";
import { useAuth } from "../AuthProvider";
import useApi from "../../hooks/useApi";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { logout } = useAuth();

  const { sendRequest } = useApi();

  const navigate = useNavigate();

  const [expand, setExpand] = useState(false);

  const handleDropDown = () => {
    setExpand(!expand);
  };

  const handleLogout = async () => {
    await sendRequest("POST", "/api/account/logout");
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex text-gray-700 px-8 py-3.5 justify-end md:justify-center">
          <div className="flex space-x-4 ">
            {/* primary nav */}
            <div className="hidden md:flex flex items-center space-x-8 px-10">
              <Link to="/home" className="hover:text-red-600">
                Home
              </Link>
              <Link to="/deck-categories" className="hover:text-red-600">
                Categories
              </Link>
              <Link
                className="hover:text-red-600 hover:cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </div>
          {/* mobile button */}
          <MobileButton onClick={handleDropDown} />
        </div>
        {/* mobile menu */}
        {expand && (
          <div className="md:hidden">
            <Link
              to="/home"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600"
            >
              Home
            </Link>
            <Link
              to="/deck-categories"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600"
            >
              Categories
            </Link>
            <Link
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600 hover:cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
