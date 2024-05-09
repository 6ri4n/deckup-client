import Navbar from "../components/layout/Navbar";
import DeckView from "../components/Cards/DeckView";
import SearchBar from "../components/ui/SearchBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <DeckView />
    </>
  );
};

export default HomePage;
