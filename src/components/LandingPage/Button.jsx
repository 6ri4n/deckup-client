import { Link } from "react-router-dom";

function Button({ children, path }) {
  return (
    <Link
      to={`/${path}`}
      className="py-4 px-4 md:px-8 text-white text-xl bg-gray-500 mr-6 rounded-3xl"
    >
      {children}
    </Link>
  );
}

export default Button;
