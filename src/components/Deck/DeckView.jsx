import useApi from "../../hooks/useApi";

function DeckView({ deckId, numTerms, title, setDeleteState }) {
  const { sendRequest } = useApi();

  const handleDeckDelete = async () => {
    try {
      await sendRequest("DELETE", `/api/deck/delete?id=${deckId}`);
      setDeleteState((prev) => !prev);
    } catch (error) {
      console.error("Failed to delete user deck:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 hover:bg-blue-500">
      <div className="border border-blue-950 rounded-md">
        <div className="flex justify-between">
          <div className="text-sm">{numTerms} terms</div>
          <div className="flex">
            <a
              href={`/edit-deck/${deckId}`}
              className="text-sm px-2 hover:text-white"
            >
              Edit
            </a>
            <button
              className="text-sm px-2 hover:text-white"
              onClick={handleDeckDelete}
            >
              Delete
            </button>
          </div>
        </div>
        <p className="text-xl">{title}</p>
      </div>
    </div>
  );
}

export default DeckView;
