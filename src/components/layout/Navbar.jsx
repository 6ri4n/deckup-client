import { useState } from "react";
import MobileButton from "../MobileButton";
function Navbar({ priNav1, priNav2, secNav1, secNav2 }) {
  const [expand, setExpand] = useState(false);
  const handleDropDown = () => {
    setExpand(!expand);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex text-gray-700 px-8 py-3.5 justify-end md:justify-center">
          <div className="flex space-x-4 ">
            {/* primary nav */}
            <div className="hidden md:flex flex items-center space-x-8 px-10">
              <a href="#" className="hover:text-red-600">
                {priNav1 ? priNav1 : "Home"}
              </a>
              <a href="#" className="hover:text-red-600">
                {priNav2 ? priNav2 : "Play"}
              </a>
              <a href="#" className="hover:text-red-600">
                {secNav1 ? secNav1 : "Logout"}
              </a>
            </div>
          </div>
          {/* mobile button */}
          <MobileButton onClick={handleDropDown} />
        </div>
        {/* mobile menu */}
        {expand && (
          <div className="md:hidden">
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600"
            >
              {priNav1 ? priNav1 : "Home"}
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600"
            >
              {priNav2 ? priNav2 : "Play"}
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-red-600"
            >
              {secNav1 ? secNav1 : "Logout"}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
