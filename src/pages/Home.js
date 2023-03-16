import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection.js";

//db
// import { db } from "../firebase/config.js";
// import { collection, getDocs } from "firebase/firestore";
export default function Home() {
  // NOTE aliasing out documents to be books to meet our data model
  const { documents: books } = useCollection("books");
  // const [books, setBooks] = useState(null);
  // NOTE this useEffect was an example of data fetching with firebase 9. But it was not an example of realtime data fetching which will be next.
  // useEffect(() => {
  //NOTE collection needs 2 arguments: the database and the collection within that database
  //   const ref = collection(db, "books");
  //   getDocs(ref).then((snapshot) => {
  //     let res = [];
  //     snapshot.docs.forEach((d) => {
  //       res.push({ id: d.id, ...d.data() });
  //     });
  //     setBooks(res);
  //   });
  // }, []);
  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
