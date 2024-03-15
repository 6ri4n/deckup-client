function Button({ children, path }) {
  return (
    <a
      href={`/${path}`}
      className="py-4 px-4 md:px-8 text-white text-xl bg-gray-500 mr-6 rounded-3xl"
    >
      {children}
    </a>
  );
}

export default Button;
