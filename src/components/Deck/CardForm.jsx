function CardForm({ current, handleUpdateCard, drag }) {
  return (
    <form
      className="border-2 rounded w-fit"
      draggable={current.cardAmount > 1 ? "true" : "false"}
      onDragStart={() => (drag.onCard.current = current.index)}
      onDragEnter={() => (drag.overCard.current = current.index)}
      onDragEnd={drag.handleSwap}
      onDragOver={(e) => e.preventDefault()}
    >
      <div>Card: {current.index + 1}</div>
      <div className="m-4">
        <label className="m-4">Term</label>
        <input
          type="text"
          name="term"
          value={current.card.term}
          onChange={(e) => handleUpdateCard(e, current.index)}
          placeholder="Term..."
        />
      </div>

      <div className="m-4">
        <label className="m-4">Definition</label>
        <textarea
          name="definition"
          value={current.card.definition}
          onChange={(e) => handleUpdateCard(e, current.index)}
          placeholder="Definition..."
        />
      </div>
    </form>
  );
}

export default CardForm;
