import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("work");
  const [description, setDescription] = useState("");

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Priority
        </label>
        <select
          type="text"
          className="w-full p-2 border rounded-lg"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          type="text"
          className="w-full p-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          className="w-full p-2 border rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </form>
  );
};

export default NoteForm;
