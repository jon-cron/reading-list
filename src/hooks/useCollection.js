import { useState, useEffect } from "react";
import { db } from "../firebase/config.js";
//firebase
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let res = [];
      snapshot.docs.forEach((doc) => {
        // NOTE we add the id because that is not automatically given with the .data().
        res.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(res);
    });
    return () => unsub();
  }, [c]);
  return { documents };
};
