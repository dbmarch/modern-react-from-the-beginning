import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  //   const [title, setTitle] = useState("");
  //   const [priority, setPriority] = useState("low");
  //   const [category, setCategory] = useState("work");
  //   const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    priority: "low",
    category: "work",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }
    const newNote = { id: Date.now(), ...formData };
    setNotes([...notes, newNote]);
    setFormData({
      id: Date.now(),
      title: "",
      priority: "low",
      category: "work",
      description: "",
    });
  };

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          name="priority"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
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
          name="category"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
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
          name="description"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
