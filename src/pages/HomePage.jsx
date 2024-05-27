import Navbar from "../components/layout/Navbar";
import DeckHomeView from "../components/Deck/DeckHomeView";
import { useState } from "react";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />
      <DeckHomeView
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
};

export default HomePage;
