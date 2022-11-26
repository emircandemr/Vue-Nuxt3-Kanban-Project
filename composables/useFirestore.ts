import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    setDoc,
    collectionGroup,
    Timestamp,
    documentId,
  } from "firebase/firestore";

  

  export const queryByCollection = async (col: string) => {
    const {$db} = useNuxtApp();
    // @ts-ignore
    const colRef = collection($db, col);
  
    const snapshot = await getDocs(colRef);
  
    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id:new Date().getTime(),
      };
    });
  
    return docs;
  };
  
  export const set = async (col: string, document: Object) => {
    const {$db} = useNuxtApp();

    await setDoc(doc(collection($db, col)), document, { merge: true });
  };
  
  export const add = async (col: string, document: Object) => {
    const {$db} = useNuxtApp();

    // @ts-ignore
    const colRef = collection($db, col);

    const docRef = await addDoc(colRef, document);
  
    return docRef;
  };
  
  export const del = async (col : string, id : string) => {
    const {$db} = useNuxtApp();

    const docRef = doc($db, col, id);
    return await deleteDoc(docRef);
  };