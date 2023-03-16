import { db } from "../firebase/config.js";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    // console.log(id)
    // NOTE the doc requires 3 arguments (database, collection name, document id)
    const docRef = doc(db, "books", id);
    await deleteDoc(docRef, id);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
