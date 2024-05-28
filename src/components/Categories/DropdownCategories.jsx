import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";

function DropdownCategories({
  deckCategories,
  selectedCategories,
  setSelectedCategories,
}) {
  const [expand, setExpand] = useState(false);
  const { data, loading, error, sendRequest } = useApi();

  useEffect(() => {
    const getUserCategories = async () => {
      try {
        await sendRequest("GET", "/api/category");
      } catch (error) {
        console.error("Failed to get user categories:", error);
      }
    };

    getUserCategories();
  }, []);

  useEffect(() => {
    setSelectedCategories(
      data?.categories.map((category) => ({
        ...category,
        selected: deckCategories.includes(category._id),
      }))
    );
  }, [data]);

  return (
    <>
      <button
        onClick={() => setExpand((prev) => !prev)}
        className="bg-blue-300"
      >
        Categories
      </button>
      {expand && (
        <>
          {loading && <div>Loading...</div>}
          {error.status && (
            <div className="text-red-500">Something went wrong.</div>
          )}
          {!loading && selectedCategories && (
            <>
              {selectedCategories.map((category) => (
                <div
                  key={category._id}
                  className={
                    category.selected
                      ? "flex border-2 border-blue-200"
                      : "flex border-2"
                  }
                  onClick={() =>
                    setSelectedCategories((prev) =>
                      prev.map((oldCategory) =>
                        oldCategory._id === category._id
                          ? { ...oldCategory, selected: !oldCategory.selected }
                          : oldCategory
                      )
                    )
                  }
                >
                  {category.categoryTitle}
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default DropdownCategories;
