import { useState } from "react";

//firebase
import { db } from "../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";
export default function BookForm() {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBook);

    // NOTE here is another way to write this line
    // await addDoc(collection(db, 'books'), {title: newBook})
    // NOTE here we are again aliasing out the collection
    const ref = collection(db, "books");

    await addDoc(ref, {
      title: newBook,
    });
    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
