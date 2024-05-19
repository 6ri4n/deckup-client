import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import useDeck from "../../hooks/useDeck";
import CardForm from "./CardForm";

function Deck({ type, currentDeck }) {
  const [deck, setDeck] = useState(
    type === "Create"
      ? [
          {
            term: "",
            definition: "",
          },
        ]
      : currentDeck[0].flashcards
  );

  const {
    handleCreateCard,
    handleUpdateCard,
    handleEmptyCard,
    handleRemoveCard,
    checkAddCard,
  } = useDeck(deck, setDeck);

  const { loading, error, sendRequest } = useApi();

  const navigate = useNavigate();

  const canAddCard = checkAddCard();

  const deckTitleRef = useRef("");
  const onCard = useRef(0);
  const overCard = useRef(0);

  const handleSwap = () => {
    const deckClone = [...deck];
    const temp = deckClone[onCard.current];

    deckClone[onCard.current] = deckClone[overCard.current];
    deckClone[overCard.current] = temp;

    setDeck(deckClone);
  };

  const handleSubmitDeck = async () => {
    const newDeck = handleEmptyCard();

    const payload = {
      deck: {
        deckTitle: deckTitleRef.current.value,
        flashcards: newDeck,
      },
    };

    try {
      if (type === "Create") {
        await sendRequest("POST", "/api/deck/create", payload);
      } else {
        await sendRequest("PATCH", "/api/deck/edit", {
          ...payload,
          _id: currentDeck[0]._id,
        });
      }
    } catch (error) {
      console.error(`Failed to ${type} user deck:`, error);
    }

    navigate("/home");
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

      <div className="m-4">
        {loading && <div>Loading...</div>}
        {error.status && <div className="text-red-500">{error.message}</div>}
      </div>

      <div className="m-4">
        <label className="m-4">Deck Title</label>
        <input
          type="text"
          name="title"
          defaultValue={type === "Create" ? "" : currentDeck[0].deckTitle}
          placeholder="Title..."
          ref={deckTitleRef}
        />
      </div>

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
