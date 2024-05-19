import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import DeckView from "./DeckView";

const DeckHomeView = () => {
  const { data, loading, error, sendRequest } = useApi();
  const [deleteState, setDeleteState] = useState(false);

  useEffect(() => {
    const getUserDecks = async () => {
      try {
        await sendRequest("GET", "/api/deck");
      } catch (error) {
        console.error("Failed to get user decks:", error);
      }
    };

    getUserDecks();
  }, [deleteState]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error.status && <div className="text-red-500">{error.message}</div>}
      {data && (
        <div>
          {data.decks.length > 0 ? (
            data.decks.map((deck) => (
              <DeckView
                key={deck._id}
                deckId={deck._id}
                numTerms={deck.flashcards.length}
                title={deck.deckTitle}
                setDeleteState={setDeleteState}
              />
            ))
          ) : (
            <div>No decks availables</div>
          )}
        </div>
      )}
    </>
  );
};

export default DeckHomeView;
