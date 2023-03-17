import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config.js";
//firebase
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _query) => {
  const [documents, setDocuments] = useState(null);

  const q = useRef(_query).current;
  useEffect(() => {
    let ref = collection(db, c);
    if (q) {
      ref = query(ref, where(...q));
    }
    const unsub = onSnapshot(ref, (snapshot) => {
      let res = [];
      snapshot.docs.forEach((doc) => {
        // NOTE we add the id because that is not automatically given with the .data().
        res.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(res);
    });
    return () => unsub();
  }, [c, q]);
  return { documents };
};
