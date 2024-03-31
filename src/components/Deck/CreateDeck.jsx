import { useState, useRef } from "react";
import useDeck from "../../hooks/useDeck";
import CardForm from "./CardForm";

function CreateDeck() {
  const [deck, setDeck] = useState([
    {
      term: "",
      definition: "",
    },
  ]);

  const { handleCreateCard, handleUpdateCard, handleEmptyCard } = useDeck(
    deck,
    setDeck
  );

  const onCard = useRef(0);
  const overCard = useRef(0);

  const handleSwap = () => {
    const deckClone = [...deck];
    const temp = deckClone[onCard.current];

    deckClone[onCard.current] = deckClone[overCard.current];
    deckClone[overCard.current] = temp;

    setDeck(deckClone);
  };

  const checkAddCard = () => {
    if (deck.length === 15) {
      return false;
    }

    for (const card of deck) {
      if (!(card.term && card.definition)) {
        return false;
      }
    }

    return true;
  };

  const canAddCard = checkAddCard();

  return (
    <>
      <button className="m-8" onClick={() => console.log(handleEmptyCard())}>
        Create
      </button>

      <div className="m-8 grid grid-cols-4 gap-4">
        {deck.map((card, index) => (
          <CardForm
            key={index}
            handleUpdateCard={handleUpdateCard}
            current={{ card, index, cardAmount: deck.length }}
            drag={{ handleSwap, onCard, overCard }}
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

export default CreateDeck;
