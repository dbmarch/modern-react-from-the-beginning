import { useState } from "react";

const NoteForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [priority, setPriority] = useState("low");
  //   const [category, setCategory] = useState("work");
  //   const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    priority: "low",
    category: "work",
    description: "",
  });

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Priority
        </label>
        <select
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
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
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
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
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
