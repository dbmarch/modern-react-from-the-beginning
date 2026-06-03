const NoteList = ({ notes }) => {
  if (notes.lenghth === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-gray-600">{note.category}</p>
          <p className="text-sm text-gray-500">
            <strong>Priority:</strong>
            {note.priority}
            Created: {note.date}
          </p>
          <p className="mt-2 text-gray-700">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
