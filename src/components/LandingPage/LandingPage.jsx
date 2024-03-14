import React from "react";

// Reusable Button Component
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
    >
      {children}
    </button>
  );
};

// Blue Box Component
const BlueBox = () => {
  return (
    <div className="flex-1 min-h-full md:min-h-0 bg-blue-500 flex flex-col justify-center items-center text-center border-opacity-100 border-8 border-blue-400">
      <header className="text-4xl mb-10">Flashcard Game</header>
      <p className="mb-20">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic iusto
        doloribus, debitis mollitia dolore doloremque repudiandae, cum atque
        voluptatum, reprehenderit quod maiores in fuga natus impedit.
        Accusantium, rerum soluta! Molestiae!
      </p>
      <section className="flex gap-4">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </section>
      <section></section>
    </div>
  );
};

// Red Box Component
const RedBox = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-full bg-opacity-20 justify-center items-center flex-1 flex"
      style={{
        backgroundImage:
          "url('./src/components/LandingPage/Example-Image.jpeg')",
      }}
    >
      {/* Content */}
      <div className="bg-white bg-opacity-80 p-8 rounded-md">
        <header className="text-4xl mb-6">Custom Header</header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quia
          accusamus! Provident modi nostrum odio?
        </p>
      </div>
    </div>
  );
};

// Green Box Component
const GreenBox = () => {
  return (
    <div className="flex-1 min-h-full md:min-h-0 bg-green-500 flex flex-col justify-center items-center text-center border-opacity-100 border-8 border-green-400">
      <header className="text-4xl mb-10">About</header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quia
        accusamus! Provident modi nostrum odio?
      </p>
    </div>
  );
};

function LandingPage() {
  return (
    <div className="flex h-screen font-mono flex-col md:flex-row">
      {/* Desktop View */}
      <div className="hidden md:flex flex-1">
        <div className="flex-1 flex flex-col">
          <BlueBox />
          <GreenBox />
        </div>
        <div className="flex-1">
          <RedBox />
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden">
        <BlueBox />
        <RedBox />
        <GreenBox />
      </div>
    </div>
  );
}

export default LandingPage;
