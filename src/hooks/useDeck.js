const useDeck = (deck, setDeck) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpdateCard = (e, cardNum) => {
    const { name, value } = e.target;

    setDeck((prev) =>
      prev.map((currentCard, index) =>
        cardNum === index ? { ...currentCard, [name]: value } : currentCard
      )
    );
  };

  const handleDeckNavigation = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => prev - 1);
    }

    if (direction === "right") {
      if (currentIndex < deck.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        if (deck[currentIndex].term && deck[currentIndex].definition) {
          handleCreateCard();
          setCurrentIndex((prev) => prev + 1);
        }
      }
    }
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

  return {
    handleCreateCard,
    handleUpdateCard,
    handleDeckNavigation,
    handleEmptyCard,
  };
};

export default useDeck;
