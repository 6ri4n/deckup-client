import { useRef } from "react";
import useApi from "../../hooks/useApi";

function CreateCategories({ setUpdateCategories }) {
  const { data, loading, error, sendRequest } = useApi();
  const titleRef = useRef();

  async function handleCreateCategory(e) {
    e.preventDefault();

    try {
      await sendRequest("POST", "/api/category/create", {
        category: { categoryTitle: titleRef.current.value },
      });
    } catch (error) {
      console.error("Failed to create user category:", error);
    }

    titleRef.current.value = "";
    setUpdateCategories((prev) => !prev);
  }

  return (
    <>
      <form onSubmit={handleCreateCategory}>
        <div className="m-4">
          <label className="m-4">Category Title</label>
          <input
            ref={titleRef}
            type="text"
            name="title"
            placeholder="Title..."
          />
        </div>
        <button type="submit">Create Category</button>
      </form>
      {loading && <div>Loading...</div>}
      {error.status && (
        <div className="text-red-500">Something went wrong.</div>
      )}
    </>
  );
}

export default CreateCategories;
