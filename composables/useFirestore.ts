import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    setDoc,
    updateDoc,
  } from "firebase/firestore";

  export const queryByCollection = async (col: string) => {
    const {$db} = useNuxtApp();
    // @ts-ignore
    const colRef = collection($db, col);
  
    const snapshot = await getDocs(colRef);
  
    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        taskID : doc.id
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

  export const update = async (col: string, id: string, document:any) => {
    const {$db} = useNuxtApp();

    const docRef = doc($db, col, id);

    await updateDoc(docRef, document);

    return docRef;

  };
  
  export const deleteByCollection = async (col : string, id : string) => {
    const {$db} = useNuxtApp();

    const docRef = doc($db, col, id);
    return await deleteDoc(docRef);
  };