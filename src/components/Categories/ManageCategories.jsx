import { useState } from "react";
import DisplayCategories from "./DisplayCategories";
import CreateCategories from "./CreateCategories";

function ManageCategories() {
  const [updateCategories, setUpdateCategories] = useState(false);

  return (
    <div className="flex flex-col">
      <DisplayCategories
        updateCategories={updateCategories}
        setUpdateCategories={setUpdateCategories}
      />
      <CreateCategories setUpdateCategories={setUpdateCategories} />
    </div>
  );
}

export default ManageCategories;
