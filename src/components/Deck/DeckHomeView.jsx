import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import DeckView from "./DeckView";

const DeckHomeView = ({ selectedCategory, setSelectedCategory }) => {
  const {
    data: deckData,
    loading: deckLoading,
    error: deckError,
    sendRequest: sendDeckRequest,
  } = useApi();

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
    sendRequest: sendCategoryRequest,
  } = useApi();

  const [deleteState, setDeleteState] = useState(false);

  useEffect(() => {
    const getUserDecks = async () => {
      try {
        if (selectedCategory === "All") {
          await sendDeckRequest("GET", "/api/deck");
        } else {
          await sendDeckRequest(
            "GET",
            `/api/deck?category=${selectedCategory}`
          );
        }
      } catch (error) {
        console.error("Failed to get user decks:", error);
      }
    };

    getUserDecks();
  }, [selectedCategory, deleteState]);

  useEffect(() => {
    const getUserCategories = async () => {
      try {
        await sendCategoryRequest("GET", "/api/category");
      } catch (error) {
        console.error("Failed to get user categories:", error);
      }
    };

    getUserCategories();
  }, []);

  return (
    <>
      {(deckLoading || categoryLoading) && <div>Loading...</div>}
      {(deckError.status || categoryError.status) && (
        <div className="text-red-500">Something went wrong.</div>
      )}
      <div className="flex">
        <>
          {categoryData && (
            <div>
              <h1>Categories:</h1>
              <li>
                <ul onClick={() => setSelectedCategory("All")}>All</ul>
                {categoryData.categories.map((category) => (
                  <ul
                    key={category._id}
                    onClick={() => setSelectedCategory(category._id)}
                  >
                    {category.categoryTitle}
                  </ul>
                ))}
              </li>
            </div>
          )}
        </>
        <div className="flex flex-col grow">
          {deckData?.decks ? (
            <>
              <a href="/create-deck" className="flex flex-row-reverse">
                Create
              </a>
              {deckData.decks.map((deck) => (
                <DeckView
                  key={deck._id}
                  deckId={deck._id}
                  numTerms={deck.flashcards.length}
                  title={deck.deckTitle}
                  setDeleteState={setDeleteState}
                />
              ))}
            </>
          ) : (
            <div>No decks availables</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeckHomeView;
