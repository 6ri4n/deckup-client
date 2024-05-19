const useDeck = (deck, setDeck) => {
  const handleUpdateCard = (e, cardNum) => {
    const { name, value } = e.target;

    setDeck((prev) =>
      prev.map((currentCard, index) =>
        cardNum === index ? { ...currentCard, [name]: value } : currentCard
      )
    );
  };

  const handleCreateCard = () => {
    setDeck((prev) => [
      ...prev,
      {
        term: "",
        definition: "",
      },
    ]);
  };

  const handleEmptyCard = () => {
    const lastCard = deck[deck.length - 1];

    if (!(lastCard.term && lastCard.definition)) {
      return deck.slice(0, deck.length - 1);
    }

    return deck;
  };

  const handleRemoveCard = (targetIndex) => {
    setDeck((prevDeck) => prevDeck.filter((_, index) => index !== targetIndex));
  };

  const checkAddCard = () => {
    if (deck.length === 24) {
      return false;
    }

    for (const card of deck) {
      if (!(card.term && card.definition)) {
        return false;
      }
    }

    return true;
  };

  return {
    handleCreateCard,
    handleUpdateCard,
    handleEmptyCard,
    handleRemoveCard,
    checkAddCard,
  };
};

export default useDeck;
