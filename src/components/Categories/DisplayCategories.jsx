import { useEffect } from "react";
import useApi from "../../hooks/useApi";

function DisplayCategories({ updateCategories, setUpdateCategories }) {
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
  }, [updateCategories]);

  async function handleDeleteCategory(categoryId) {
    try {
      await sendRequest("DELETE", `/api/category/delete?id=${categoryId}`);
    } catch (error) {
      console.error("Failed to delete user category:", error);
    }

    setUpdateCategories((prev) => !prev);
  }

  async function handleEditCategory(categoryId, categoryTitle) {
    if (categoryTitle === "") return;

    try {
      await sendRequest("PATCH", "/api/category/edit", {
        _id: categoryId,
        category: { categoryTitle },
      });
    } catch (error) {
      console.error("Failed to edit user category:", error);
    }

    setUpdateCategories((prev) => !prev);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error.status && (
        <div className="text-red-500">Something went wrong.</div>
      )}
      {!loading && data?.categories && (
        <>
          <h1>Categories:</h1>
          {data.categories.map((category) => (
            <div key={category._id} className="flex">
              <input
                className="m-4"
                type="text"
                name="category"
                defaultValue={category.categoryTitle}
                onBlur={(e) => handleEditCategory(category._id, e.target.value)}
                placeholder={category.categoryTitle}
              />
              <button onClick={() => handleDeleteCategory(category._id)}>
                X
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default DisplayCategories;
