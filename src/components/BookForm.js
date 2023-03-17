import { useState } from "react";

//firebase
import { db } from "../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";

import { useAuthContext } from "../hooks/useAuthContext.js";
export default function BookForm() {
  const { user } = useAuthContext();
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBook);

    // NOTE here is another way to write this line
    // await addDoc(collection(db, 'books'), {title: newBook})
    // NOTE here we are again aliasing out the collection
    const ref = collection(db, "books");

    // NOTE if we were to say id we would overwrite the firestore auto generated id so we say uid to add another data type.
    await addDoc(ref, {
      title: newBook,
      uid: user.uid,
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
