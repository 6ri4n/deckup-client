import React from "react";

const DeckView = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="border border-blue-950 rounded-md">
        <div className="text-sm"># of terms</div>
        <p className="text-xl">Deck name</p>
      </div>
    </div>
  );
};

export default DeckView;
