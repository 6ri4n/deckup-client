import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";
import NotFoundPage from "../../pages/NotFoundPage";
import Deck from "./Deck";

function EditDeck() {
  const location = useLocation();
  const deckId = location.pathname.split("/")[2];
  const { data, loading, error, sendRequest } = useApi();

  useEffect(() => {
    const getUserDeck = async () => {
      try {
        await sendRequest("GET", `/api/deck?id=${deckId}`);
      } catch (error) {
        console.error("Failed to get user deck:", error);
      }
    };

    getUserDeck();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error.status && <NotFoundPage />}
      {data && <Deck type={"Edit"} currentDeck={data.deck.decks} />}
    </>
  );
}

export default EditDeck;
