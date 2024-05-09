import { useState, useRef } from "react";
import useDeck from "../../hooks/useDeck";
import useApi from "../../hooks/useApi";
import CardForm from "./CardForm";
import { useAuth } from "../AuthProvider";

function Deck({ type, currentDeck }) {
  const [deck, setDeck] = useState(
    type === "Create"
      ? [
          {
            term: "",
            definition: "",
          },
        ]
      : currentDeck.flashcards
  );

  const {
    handleCreateCard,
    handleUpdateCard,
    handleEmptyCard,
    handleRemoveCard,
    checkAddCard,
  } = useDeck(deck, setDeck);

  const { data, loading, error, setPayload, sendRequest } = useApi(
    "PATCH",
    "/api/deck/edit"
  );

  const { user } = useAuth();

  const canAddCard = checkAddCard();

  const onCard = useRef(0);
  const overCard = useRef(0);

  const handleSwap = () => {
    const deckClone = [...deck];
    const temp = deckClone[onCard.current];

    deckClone[onCard.current] = deckClone[overCard.current];
    deckClone[overCard.current] = temp;

    setDeck(deckClone);
  };

  const handleSubmitDeck = () => {
    const newDeck = handleEmptyCard();
    console.log(user.userId);
    console.log(newDeck);
    console.log(currentDeck?._id);
  };

  return (
    <>
      <button
        className="m-8"
        disabled={deck.length === 0}
        onClick={handleSubmitDeck}
      >
        {type}
      </button>

      <div className="m-8 grid grid-cols-4 gap-4">
        {deck.map((card, index) => (
          <CardForm
            key={index}
            handleUpdateCard={handleUpdateCard}
            current={{ card, index, cardAmount: deck.length }}
            drag={{ handleSwap, onCard, overCard }}
            handleRemoveCard={handleRemoveCard}
          />
        ))}
        <button
          className={
            canAddCard
              ? "bg-green-700 border-2 rounded"
              : "bg-red-700 border-2 rounded"
          }
          onClick={handleCreateCard}
          disabled={!canAddCard}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Deck;
